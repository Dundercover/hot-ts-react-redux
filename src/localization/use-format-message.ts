import { MessageValue, useIntl } from 'react-intl'

export default () => {
  const intl = useIntl()
  return (id: string, values?: { [key: string]: MessageValue }) =>
    intl.formatMessage({ id }, values)
}
