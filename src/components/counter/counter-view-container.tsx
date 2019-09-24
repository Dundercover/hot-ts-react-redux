import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useFormatMessage } from '../../localization'
import { change, fetch, increment, reset } from './counter-action-creators'
import { selectCount, selectIsLoadingCount } from './counter-selectors'

import Counter from './counter-view'

const CounterViewContainer: React.FunctionComponent = ({ children }) => {
  const count = useSelector(selectCount)
  const isLoading = useSelector(selectIsLoadingCount)
  const dispatch = useDispatch()
  const f = useFormatMessage()

  const messages = {
    valueText: f('COUNTER_VALUE_TEXT', { value: count }),
    incrementButtonText: f('COUNTER_INCREMENT_BUTTON_TEXT'),
    clearButtonText: f('COUNTER_CLEAR_BUTTON_TEXT'),
    fetchButtonText: f('COUNTER_FETCH_BUTTON_TEXT'),
    isLoading: f('COUNTER_IS_LOADING'),
  }

  const handleIncrement = useCallback(() => dispatch(increment(1)), [dispatch])
  const handleReset = useCallback(() => dispatch(reset()), [dispatch])
  const handleFetch = useCallback(() => dispatch(fetch()), [dispatch])
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(change(+event.target.value)),
    [dispatch]
  )

  return (
    <Counter
      count={count}
      isLoading={isLoading}
      messages={messages}
      onIncrementClick={handleIncrement}
      onResetClick={handleReset}
      onFetchClick={handleFetch}
      onCountInputChanged={handleChange}
    />
  )
}

export default CounterViewContainer
