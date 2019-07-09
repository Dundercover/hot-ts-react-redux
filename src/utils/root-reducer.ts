import { combineReducers } from 'redux'

import { default as counterReducer } from '../components/counter/counter-reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
