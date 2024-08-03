
import React from 'react';

// Define the props interface
interface GreetingProps {
  name: string;
}

// Use the GreetingProps interface to type the props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
