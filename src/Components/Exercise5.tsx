import React, { useState, useEffect } from "react";

export default function Exercise5() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    function tick() {
      if (running) {
        setTime((prevTime) => prevTime + 1);
      }
    }

    const intervalId = setInterval(tick, 1);

    return () => clearInterval(intervalId);
  }, [running]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Exercise 5: Clock and timer</h2>
      <h2>Current time:</h2>
      <div>{currentTime.toLocaleTimeString()}</div>
      <h2>Timer:</h2>
      <div>{time / 1000}</div>
      <button onClick={() => setRunning(false)} disabled={!running}>
        Pause
      </button>
      <button onClick={() => setRunning(true)} disabled={running}>
        {time === 0 ? "Start" : "Resume"}
      </button>
    </div>
  );
}
