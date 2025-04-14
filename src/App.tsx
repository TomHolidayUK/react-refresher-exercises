import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1)
  }

  function resetCounter() {
    setCounter(0)
  }

  return (
    <div>
      <p>Value: {counter}</p>
      <button onClick={incrementCounter}>Increase</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default App;
