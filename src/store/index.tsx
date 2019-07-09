import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { default as counterReducer } from '../components/counter/counter-reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middleWareEnhancer = applyMiddleware(thunkMiddleware)

  const win = window as any

  if (!win.store) {
    win.store = createStore(
      rootReducer,
      composeWithDevTools(middleWareEnhancer)
    )
  } else {
    win.store.replaceReducer(rootReducer)
  }

  return win.store
}
