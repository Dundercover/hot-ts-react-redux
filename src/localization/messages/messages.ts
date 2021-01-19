class MessagesClass {
  COUNTER_CLEAR_BUTTON_TEXT = ''
  COUNTER_FETCH_BUTTON_TEXT = ''
  COUNTER_INCREMENT_BUTTON_TEXT = ''
  COUNTER_IS_LOADING = ''
  COUNTER_VALUE_TEXT = ''
  START_PAGE_HOT_RELOAD_TEXT = ''
  START_PAGE_LOCALIZATION_TEXT = ''
  START_PAGE_TITLE = ''
}

export interface IMessages extends MessagesClass {}

type MessageKeysType = Array<keyof IMessages>

export const messageKeys: MessageKeysType = Object.keys(
  new MessagesClass()
) as MessageKeysType
