import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: royalblue;
`

export interface ICounterMessages {
  valueText: JSX.Element
  incrementButtonText: JSX.Element
  clearButtonText: JSX.Element
  fetchButtonText: JSX.Element
  isLoading: JSX.Element
}

interface ICounterProps {
  count: number
  isLoading: boolean
  messages: ICounterMessages
  onIncrementClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
  onResetClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
  onFetchClick:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
  onCountInputChanged:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined
}

const Counter: React.FunctionComponent<ICounterProps> = ({
  count,
  isLoading,
  messages,
  onIncrementClick,
  onResetClick,
  onFetchClick,
  onCountInputChanged,
}) => (
  <div>
    <div>{messages.valueText}</div>
    <StyledButton disabled={isLoading} onClick={onIncrementClick}>
      {messages.incrementButtonText}
    </StyledButton>
    <StyledButton disabled={isLoading} onClick={onResetClick}>
      {messages.clearButtonText}
    </StyledButton>
    <StyledButton disabled={isLoading} onClick={onFetchClick}>
      {messages.fetchButtonText}
    </StyledButton>
    <input
      aria-label="input-field"
      disabled={isLoading}
      value={count}
      onChange={onCountInputChanged}
    />
    {isLoading && <div>{messages.isLoading}</div>}
  </div>
)

export default Counter
