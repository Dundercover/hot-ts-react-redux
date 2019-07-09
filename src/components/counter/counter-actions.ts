import React from 'react'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const INCREMENT_ACTION_TYPE = 'counter/IncrementAction'
export const RESET_ACTION_TYPE = 'counter/ResetAction'

export const CHANGED = 'counter/CHANGED'

export const FETCH_STARTED = 'counter/FETCH_STARTED'
export const FETCH_FINISHED = 'counter/FETCH_FINISHED'
export const FETCH_FAILED = 'counter/FETCH_FAILED'

export interface IIncrementAction {
  type: typeof INCREMENT_ACTION_TYPE
  payload: {
    value: number
  }
}

export interface IResetAction {
  type: typeof RESET_ACTION_TYPE
}

export interface IChangeAction {
  type: typeof CHANGED
  payload: {
    value: number
  }
}

export interface IFetchStartedAction {
  type: typeof FETCH_STARTED
}

export interface IFetchFinishedAction {
  type: typeof FETCH_FINISHED
  payload: {
    value: number
  }
}

export type CounterActionTypes =
  | IIncrementAction
  | IResetAction
  | IChangeAction
  | IFetchStartedAction
  | IFetchFinishedAction
