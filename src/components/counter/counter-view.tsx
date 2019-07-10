import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { useFormatMessage } from '../../localization'
import { change, fetch, increment, reset } from './counter-action-creators'
import { selectCount, selectIsLoadingCount } from './counter-selectors'

const StyledButton = styled.button`
  background-color: royalblue;
`

const Counter: React.FunctionComponent = ({ children }) => {
  const count = useSelector(selectCount)
  const isLoading = useSelector(selectIsLoadingCount)
  const dispatch = useDispatch()
  const f = useFormatMessage()

  const handleIncrement = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => dispatch(increment(1)),
    [dispatch]
  )

  const handleReset = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => dispatch(reset()),
    [dispatch]
  )

  const handleFetch = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => dispatch(fetch()),
    [dispatch]
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(change(+event.target.value)),
    [dispatch]
  )

  return (
    <div>
      <div>{f('COUNTER_VALUE_TEXT', { value: count })}</div>
      <StyledButton disabled={isLoading} onClick={handleIncrement}>
        {f('COUNTER_INCREMENT_BUTTON_TEXT')}
      </StyledButton>
      <StyledButton disabled={isLoading} onClick={handleReset}>
        {f('COUNTER_CLEAR_BUTTON_TEXT')}
      </StyledButton>
      <StyledButton disabled={isLoading} onClick={handleFetch}>
        {f('COUNTER_FETCH_BUTTON_TEXT')}
      </StyledButton>
      <input
        aria-label="input-field"
        disabled={isLoading}
        value={count}
        onChange={handleChange}
      />
      {isLoading && <div>{f('COUNTER_IS_LOADING')}</div>}
    </div>
  )
}

export default Counter
