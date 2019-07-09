import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { change, fetch, increment, reset } from './counter-action-creators'
import { selectCount, selectIsLoadingCount } from './counter-selectors'

const StyledButton = styled.button``

const Counter: React.FunctionComponent = ({ children }) => {
  const count = useSelector(selectCount)
  const isLoading = useSelector(selectIsLoadingCount)
  const dispatch = useDispatch()

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
    <>
      <div>{`Value: ${count}`}</div>
      <StyledButton disabled={isLoading} onClick={handleIncrement}>
        Increment
      </StyledButton>
      <StyledButton disabled={isLoading} onClick={handleReset}>
        Clear
      </StyledButton>
      <StyledButton disabled={isLoading} onClick={handleFetch}>
        Fetch
      </StyledButton>
      <input
        aria-label="input-field"
        disabled={isLoading}
        value={count}
        onChange={handleChange}
      />
      {isLoading && <div>Fetching...</div>}
    </>
  )
}

export default Counter
