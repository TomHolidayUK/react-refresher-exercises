import React, { useState } from "react";
import { ChromePicker } from "react-color";

export default function Exercise3() {
  const [colour, setColour] = useState("");

  return (
    <div style={{ backgroundColor: colour }}>
      <h2>Exercise 3: Choose background colour</h2>
      <ChromePicker
        color={colour}
        onChange={(updated) => setColour(updated.hex)}
      />
      <button onClick={() => setColour("")}>Reset background colour</button>
    </div>
  );
}
