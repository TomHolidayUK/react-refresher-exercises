//import React, {useState} from 'react';
import "./App.css";
import Exercise1 from "./Components/Exercise1";
import Exercise2 from "./Components/Exercise2";
import Exercise3 from "./Components/Exercise3";
import Exercise4 from "./Components/Exercise4";
import Exercise5 from "./Components/Exercise5";
import Exercise6 from "./Components/Exercise6";

function App() {
  return (
    <div className="container">
      <div className="exercise">
        <Exercise1 />
      </div>
      <div className="exercise">
        <Exercise2 />
      </div>
      <div className="exercise">
        <Exercise3 />
      </div>
      <div className="exercise">
        <Exercise4 />
      </div>
      <div className="exercise">
        <Exercise5 />
      </div>
      <div className="exercise">
        <Exercise6 />
      </div>
    </div>
  );
}

export default App;
