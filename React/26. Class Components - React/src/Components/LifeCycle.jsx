import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  render() {
    return (
      <div className="box">
        <p>Count {this.state.count}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default LifeCycle;
