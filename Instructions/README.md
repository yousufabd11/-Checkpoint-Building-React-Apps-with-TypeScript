Instructions

* **Code 01 :**

  import React from 'react';
  const Greeting = ({ name }) => {
  return `<div>`Hello, {name}!`</div>`;
  };
  export default Greeting;
* **Code 02 :**

  import React, { Component } from 'react';
  class Counter extends Component {
  state = {
  count: 0
  }; increment = () => {
  this.setState({ count: this.state.count + 1 });
  };
  render() {
  return
  ( `<div>`

  <p>Count: {this.state.count}</p> 
  <button onClick={this.increment}>Increment</button> 
  </div> );
   }
   } 
  export default Counter;

   );
   }
   } 
  export default Counter;);
  }
  }
  export default Counter;
