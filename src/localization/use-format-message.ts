import { FormatXMLElementFn, PrimitiveType } from 'intl-messageformat'
import { useIntl } from 'react-intl'
import { IMessages } from './messages'

export default () => {
  const intl = useIntl()
  return (
    id: keyof IMessages,
    values: Record<
      string,
      PrimitiveType | React.ReactElement | FormatXMLElementFn
    > = {}
  ) => intl.formatMessage({ id }, values)
}
