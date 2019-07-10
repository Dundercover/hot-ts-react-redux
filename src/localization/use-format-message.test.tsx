import { cleanup, render } from '@testing-library/react'
import { LocalizationProvider } from 'localization'
import React from 'react'

import { MessageValue } from 'react-intl'
import { getLocale } from './get-locale'
import { IMessages } from './messages'
import useFormatMessage from './use-format-message'

jest.mock('./get-locale')

afterEach(cleanup)

const getLocaleMock = (getLocale as unknown) as jest.Mock<string>

const renderWithLocalization = (component: React.ReactNode) => {
  return render(<LocalizationProvider>{component}</LocalizationProvider>)
}

// Wrap the hook in a component to test it in its context
const FormatMessage: React.FunctionComponent<{
  id: keyof IMessages
  values?: {
    [key: string]: MessageValue
  }
}> = ({ id, values }) => {
  const f = useFormatMessage()
  return <div data-testid="format-text">{f(id, values)}</div>
}

describe('useFormatMessage', () => {
  test('returns Öka for locale sv-SE', () => {
    getLocaleMock.mockReturnValueOnce('sv-SE')
    const { getByTestId } = renderWithLocalization(
      <FormatMessage id={'COUNTER_INCREMENT_BUTTON_TEXT'} />
    )

    expect(getByTestId('format-text').textContent).toBe('Öka')
  })

  test('returns Increment for locale en-US', () => {
    getLocaleMock.mockReturnValueOnce('en-US')
    const { getByTestId } = renderWithLocalization(
      <FormatMessage id={'COUNTER_INCREMENT_BUTTON_TEXT'} />
    )

    expect(getByTestId('format-text').textContent).toBe('Increment')
  })

  test('returns Value: 123 for locale en-US', () => {
    getLocaleMock.mockReturnValueOnce('en-US')
    const { getByTestId } = renderWithLocalization(
      <FormatMessage id={'COUNTER_VALUE_TEXT'} values={{ value: 123 }} />
    )

    expect(getByTestId('format-text').textContent).toBe('Value: 123')
  })
})
