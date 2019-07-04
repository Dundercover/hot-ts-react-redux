import * as React from 'react'
import ToggleButton from './ToggleButton'

interface IToggleProps {
  on?: boolean
  onChange: () => void
}

export default class Toggle extends React.PureComponent<IToggleProps, {}> {
  public render() {
    return (
      <div className="toggle-container" data-testid="toggle-container">
        <ToggleButton on={this.props.on} onClick={this.props.onChange} />
      </div>
    )
  }
}
