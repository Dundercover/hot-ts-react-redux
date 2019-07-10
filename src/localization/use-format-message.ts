import { MessageValue, useIntl } from 'react-intl'
import { IMessages } from './messages'

export default () => {
  const intl = useIntl()
  return (id: keyof IMessages, values?: { [key: string]: MessageValue }) =>
    intl.formatMessage({ id }, values)
}
