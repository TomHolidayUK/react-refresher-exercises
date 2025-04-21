import React, { useState } from "react";

export default function Exercise4() {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  function updateInputs(e: React.ChangeEvent<HTMLInputElement>, input: string) {
    //console.log(e.target.value, input);
    const userInput: string = e.target.value;
    if (input === "email" && !userInput.includes("@")) {
      setErrorMsg("Your email address doesn't contain a '@'");
      setEnableSubmit(false);
      return;
    }

    //setEnableSubmit(true);
  }

  return (
    <div>
      <h2>Exercise 4: Form validator</h2>
      <div></div>
      <div>Name:</div>
      <input type="text" onChange={(e) => updateInputs(e, "name")} />
      <div>Email:</div>
      <input type="text" onChange={(e) => updateInputs(e, "email")} />
      <div>{errorMsg}</div>
      <button disabled={enableSubmit}>Submit</button>
      <div>{successMsg}</div>
    </div>
  );
}
