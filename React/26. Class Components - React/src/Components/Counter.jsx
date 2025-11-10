import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="box">
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

export default Counter;
