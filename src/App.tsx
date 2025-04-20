//import React, {useState} from 'react';
import "./App.css";
import Exercise1 from "./Components/Exercise1";
import Exercise2 from "./Components/Exercise2";
import Exercise3 from "./Components/Exercise3";

function App() {
  return (
    <div className="container">
      <div className="exercise1">
        <Exercise1 />
      </div>
      <div className="exercise2">
        <Exercise2 />
      </div>
      <div className="exercise3">
        <Exercise3 />
      </div>
    </div>
  );
}

export default App;
