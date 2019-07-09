import React from 'react'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import {
  CHANGED,
  CounterActionTypes,
  FETCH_FINISHED,
  FETCH_STARTED,
  INCREMENT_ACTION_TYPE,
  RESET_ACTION_TYPE,
} from './counter-actions'

export type CounterState = Readonly<{
  count: number
  isLoading: boolean
}>

const initialState: CounterState = {
  count: 0,
  isLoading: false,
}

const reducer = (
  prevState = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT_ACTION_TYPE:
      return { ...prevState, count: prevState.count + action.payload.value }
    case RESET_ACTION_TYPE:
      return { ...prevState, count: 0 }
    case CHANGED:
      return { ...prevState, count: action.payload.value }
    case FETCH_STARTED:
      return { ...prevState, isLoading: true }
    case FETCH_FINISHED:
      return { ...prevState, count: action.payload.value, isLoading: false }
    default:
      return prevState
  }
}

export default reducer
