import { ILettersState } from './reducers'

export const ASYNC_TOGGLE = 'ASYNC_TOGGLE'
export const TOGGLE_LETTER = 'TOGGLE_LETTER'

export interface IToggleLetterAction {
  type: typeof TOGGLE_LETTER
  key: keyof ILettersState
}

export interface IAsyncToggleLetterAction {
  type: typeof ASYNC_TOGGLE
  key: keyof ILettersState
}

export type LetterActionType = IToggleLetterAction

export function changeSwitch(key: keyof ILettersState): IToggleLetterAction {
  return {
    type: TOGGLE_LETTER,
    key,
  }
}

export function asyncToggleLetter(
  key: keyof ILettersState
): IAsyncToggleLetterAction {
  return {
    type: ASYNC_TOGGLE,
    key,
  }
}
