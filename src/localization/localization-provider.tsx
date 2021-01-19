import React from 'react'
import { IntlProvider } from 'react-intl'
import { getLocale } from './get-locale'
import { getMessages, Locale } from './messages'

const LocalizationProvider: React.FunctionComponent<{ locale?: Locale }> = ({
  locale = null,
  children,
}) => {
  const currentLocale = React.useMemo(() => locale || getLocale(), [locale])
  const messages = React.useMemo(() => getMessages(currentLocale), [
    currentLocale,
  ])
  return (
    <IntlProvider
      key={currentLocale} // Add the key prop to make sure the app is re-rendered when changing locale
      locale={currentLocale}
      messages={messages}>
      {children}
    </IntlProvider>
  )
}

export default LocalizationProvider
