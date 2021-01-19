import * as React from 'react'
import { render } from '@testing-library/react'

import App from './app'

describe('App', () => {
  it('does not break', () => {
    render(<App />)
  })
})
