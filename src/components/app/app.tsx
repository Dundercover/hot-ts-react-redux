import { bind } from 'helpful-decorators'
import * as React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../../store/index'
import { asyncToggleLetter, changeSwitch } from '../../store/letters/actions'
import Counter from '../counter'
import Toggle from '../toggle'

interface IAppProps {
  a: boolean
  b: boolean

  changeSwitch: typeof changeSwitch
  asyncToggleLetter: typeof asyncToggleLetter
}

class App extends React.PureComponent<IAppProps, {}> {
  public render() {
    return (
      <>
        <div className="container">
          Toggle A:
          <Toggle on={this.props.a} onChange={this.getToggleChanger('a')} />
        </div>
        <div className="container">
          Toggle B:
          <Toggle on={this.props.b} onChange={this.getToggleChanger('b')} />
        </div>

        <button onClick={this.getAsyncToggleChanger('a')}>
          Delay Toggle A
        </button>

        <Counter />
      </>
    )
  }
  private onToggleChange(key: 'a' | 'b'): void {
    this.props.changeSwitch(key)
  }

  private onAsyncToggleChange(key: 'a' | 'b'): void {
    this.props.asyncToggleLetter(key)
  }

  @bind
  private getToggleChanger(key: 'a' | 'b'): () => void {
    return () => this.onToggleChange(key)
  }

  @bind
  private getAsyncToggleChanger(key: 'a' | 'b'): () => void {
    return () => this.onAsyncToggleChange(key)
  }
}

const mapStateToProps = (state: AppState) => state.letters

const mapDispatchToProps = {
  changeSwitch,
  asyncToggleLetter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
