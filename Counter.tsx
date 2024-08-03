
import React, { Component } from 'react';

// Define the state interface
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  // Initialize the state with type annotations
  state: CounterState = {
    count: 0,
  };

  // Define the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
