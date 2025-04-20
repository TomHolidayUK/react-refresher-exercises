import React, { useState } from "react";

export default function Exercise3() {
  const colours = ["Red", "Green", "Blue"];

  const [colour, setColour] = useState("");

  function changeBackground(colour: string) {
    console.log(colour);
    setColour(colour);
  }

  return (
    <div style={{ backgroundColor: colour, height: "100vh" }}>
      <h2>Exercise 3: Choose background colour</h2>
      {colours.map((colour, index) => (
        <div key={index} onClick={() => changeBackground(colour)}>
          {colour}
        </div>
      ))}
      <button onClick={() => setColour("")}>Reset background colour</button>
    </div>
  );
}
