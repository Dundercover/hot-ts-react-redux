import * as React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../utils/configure-store'

const store = configureStore()

import styled from 'styled-components'
import Counter from '../counter'

const StyledApp = styled.div`
  text-align: center;
  width: 100%;
`

const App = () => (
  <Provider store={store}>
    <StyledApp>
      <h2>HMR Example</h2>
      <h3>
        Change the state using the counter functionality, then edit a file to
        see the change instantly.
      </h3>
      <Counter />
    </StyledApp>
  </Provider>
)

export default App
