import React, {useState} from 'react'

export default function Exercise1() {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
    setCounter(counter + 1)
    }

    function resetCounter() {
    setCounter(0)
    }

  return (
    <div>
        <h2>Exercise 1</h2>
        <p>Value: {counter}</p>
        <button onClick={incrementCounter}>Increase</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
  )
}
