import { IToggleLetterAction, TOGGLE_LETTER } from './actions'

export interface ILettersState {
  a: boolean
  b: boolean
}

const initialState: ILettersState = {
  a: false,
  b: false,
}

export function lettersReducer(
  state = initialState,
  action: IToggleLetterAction
): ILettersState {
  switch (action.type) {
    case 'TOGGLE_LETTER':
      const update: Partial<ILettersState> = {}
      update[action.key] = !state[action.key]

      return {
        ...state,
        ...(update as Partial<ILettersState>),
      }
    default:
      return state
  }
}
