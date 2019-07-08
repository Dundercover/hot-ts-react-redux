import { render } from '@testing-library/react'
import * as React from 'react'

import Toggle from './toggle'

// tslint:disable-next-line: no-empty
const onChange = () => {}

test('Toggle Component renders with toggle switch', () => {
  const { getByTestId } = render(<Toggle onChange={onChange} />)
  expect(getByTestId('toggle-button')).toBeTruthy()
})

test('Toggle defaults to off', () => {
  const { getByTestId } = render(<Toggle onChange={onChange} />)
  const toggleButton = getByTestId('toggle-button')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)
})
