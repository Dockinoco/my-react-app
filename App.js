import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>You clicked the button {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  );
}

export default App;

