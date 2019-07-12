import * as React from 'react'
import { FormattedMessage, MessageValue } from 'react-intl'
import { IMessages } from './messages'

export default (
  id: keyof IMessages,
  values?: { [key: string]: MessageValue }
) => <FormattedMessage id={id} values={values} />
