import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { MessageValue } from 'react-intl'

import f from './format-message'
import { getLocale } from './get-locale'
import LocalizationProvider from './localization-provider'
import { IMessages } from './messages'

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
  return <div data-testid="format-text">{f(id, values)}</div>
}

describe('formatMessage', () => {
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
