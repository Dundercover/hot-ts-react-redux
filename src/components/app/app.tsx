import * as React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import { LocalizationProvider, useFormatMessage } from '../../localization'
import configureStore from '../../utils/configure-store'
import Counter from '../counter'

const store = configureStore()

const StyledAppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AppContent = () => {
  const f = useFormatMessage()
  return (
    <StyledAppContent>
      <h2>{f('START_PAGE_TITLE')}</h2>
      <h3>{f('START_PAGE_HOT_RELOAD_TEXT')}</h3>
      <h3>{f('START_PAGE_LOCALIZATION_TEXT')}</h3>
      <Counter />
    </StyledAppContent>
  )
}

const App = () => (
  <LocalizationProvider>
    <Provider store={store}>
      <AppContent />
    </Provider>
  </LocalizationProvider>
)

export default App
