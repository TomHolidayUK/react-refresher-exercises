import React, { useState } from "react";
import { ChromePicker } from "react-color";

export default function Exercise3() {
  const [colour, setColour] = useState("");

  return (
    <div style={{ backgroundColor: colour, height: "100vh" }}>
      <h2>Exercise 3: Choose background colour</h2>
      <button onClick={() => setColour("")}>Reset background colour</button>
      <ChromePicker
        color={colour}
        onChange={(updated) => setColour(updated.hex)}
      />
    </div>
  );
}
