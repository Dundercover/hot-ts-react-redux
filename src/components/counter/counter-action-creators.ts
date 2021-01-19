import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../../utils/root-reducer'

import {
  CHANGED,
  FETCH_FINISHED,
  FETCH_STARTED,
  IChangeAction,
  IFetchFinishedAction,
  IIncrementAction,
  INCREMENT_ACTION_TYPE,
  IResetAction,
  RESET_ACTION_TYPE,
} from './counter-actions'

export function increment(value: number): IIncrementAction {
  return {
    type: INCREMENT_ACTION_TYPE,
    payload: {
      value,
    },
  }
}

export function reset(): IResetAction {
  return {
    type: RESET_ACTION_TYPE,
  }
}

export function change(value: number): IChangeAction {
  return {
    type: CHANGED,
    payload: { value },
  }
}

function fetchFinished(value: number): IFetchFinishedAction {
  return {
    type: FETCH_FINISHED,
    payload: { value },
  }
}

export const fetch = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  dispatch({ type: FETCH_STARTED })
  const asyncResp = await exampleAPI()
  dispatch(fetchFinished(asyncResp))
}

async function exampleAPI() {
  await Promise.resolve(new Promise((resolve) => setTimeout(resolve, 2000)))
  return Math.floor(Math.random() * 999999)
}
