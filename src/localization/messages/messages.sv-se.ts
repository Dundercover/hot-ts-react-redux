/**
 * This file contains all swedish translations (messages) used in the web app.
 * Must be a flat key-value object where keys are sorted in alphanumerical order.
 * We are using the ICU message syntax: https://formatjs.io/guides/message-syntax/
 * Format keys using upper snake case and name them by a hierarchy representing location inside the app
 * Example: 'USER_LIST_PAGE_ADD_BUTTON_TEXT'
 */
import { IMessages } from './messages'

const messages: IMessages = {
  COUNTER_CLEAR_BUTTON_TEXT: 'Nollställ',
  COUNTER_FETCH_BUTTON_TEXT: 'Hämta',
  COUNTER_INCREMENT_BUTTON_TEXT: 'Öka',
  COUNTER_IS_LOADING: 'Hämtar...',
  COUNTER_VALUE_TEXT: 'Värde: {value}',
  START_PAGE_HOT_RELOAD_TEXT:
    'Ändra något i redux-statet med hjälp av räknaren nedan, redigera sedan en fil för att se ändringarna direkt uppdateras i webbläsaren.',
  START_PAGE_LOCALIZATION_TEXT:
    'Det här projektet har även grundläggande stöd för flera språk. Testa ändra webbläsarens språk till engelska (en-US) och ladda om sidan.',
  START_PAGE_TITLE: 'HMR - Exempel',
}

export default messages
