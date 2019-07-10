/**
 * This file contains all american english translations (messages) used in the web app.
 * Must be a flat key-value object where keys are sorted in alphanumerical order.
 * We are using the ICU message syntax: https://formatjs.io/guides/message-syntax/
 * Format keys using upper snake case and name them by a hierarchy representing location inside the app
 * Example: 'USER_LIST_PAGE_ADD_BUTTON_TEXT'
 */
import { IMessages } from './messages'

export default {
  COUNTER_CLEAR_BUTTON_TEXT: 'Clear',
  COUNTER_FETCH_BUTTON_TEXT: 'Fetch',
  COUNTER_INCREMENT_BUTTON_TEXT: 'Increment',
  COUNTER_IS_LOADING: 'Fetching...',
  COUNTER_VALUE_TEXT: 'Value: {value}',
  START_PAGE_HOT_RELOAD_TEXT:
    'Change the state using the counter functionality, then edit a file to see the change instantly.',
  START_PAGE_LOCALIZATION_TEXT:
    'This project also comes with basic localization support. Try it out by changing the browser language to swedish (sv-SE) and refresh the page.',
  START_PAGE_TITLE: 'HMR Example',
}
