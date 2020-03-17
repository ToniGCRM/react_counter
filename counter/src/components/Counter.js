import React, { Component } from 'react';

class Counter extends Component {
  state = { currentNum: 0 }

  inc = () => {
    this.setState({ currentNum: this.state.currentNum + 1})
  }

  dec = () => {
    this.setState({ currentNum: this.state.currentNum - 1})
  }
  render() {
    const { title } = this.props
    const { currentNum } = this.state
    return(
      <div>
          <p>{ title }</p>
          <p>{currentNum}</p>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
      </div>
    )
  }
}
export default Counter;