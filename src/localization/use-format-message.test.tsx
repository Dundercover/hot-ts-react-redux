import { render } from '@testing-library/react'
import { expect } from 'chai'
import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat'
import React from 'react'

import LocalizationProvider from './localization-provider'
import { IMessages, Locale } from './messages'
import useFormatMessage from './use-format-message'

const renderWithLocalization = (component: React.ReactNode, locale: Locale) => {
  return render(
    <LocalizationProvider locale={locale}>{component}</LocalizationProvider>
  )
}

// Wrap the hook in a component to test it in its context
const FormatMessage: React.FunctionComponent<{
  id: keyof IMessages
  values?:
    | Record<
        string,
        string | PrimitiveType | FormatXMLElementFn<string, string>
      >
    | undefined
}> = ({ id, values = {} }) => {
  const f = useFormatMessage()
  return <div data-testid="format-text">{f(id, values)}</div>
}

describe('useFormatMessage', () => {
  it('returns Öka for locale sv-SE', () => {
    const { getByTestId } = renderWithLocalization(
      <FormatMessage id={'COUNTER_INCREMENT_BUTTON_TEXT'} />,
      'sv-SE'
    )

    expect(getByTestId('format-text').textContent).to.equal('Öka')
  })

  it('returns Increment for locale en-US', () => {
    const { getByTestId } = renderWithLocalization(
      <FormatMessage id={'COUNTER_INCREMENT_BUTTON_TEXT'} />,
      'en-US'
    )

    expect(getByTestId('format-text').textContent).to.equal('Increment')
  })

  it('returns Value: 123 for locale en-US', () => {
    const { getByTestId } = renderWithLocalization(
      <FormatMessage id={'COUNTER_VALUE_TEXT'} values={{ value: 123 }} />,
      'en-US'
    )

    expect(getByTestId('format-text').textContent).to.equal('Value: 123')
  })
})
