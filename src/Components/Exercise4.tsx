import React, { useState, useEffect } from "react";

export default function Exercise4() {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function updateInputs(e: React.ChangeEvent<HTMLInputElement>, input: string) {
    const userInput: string = e.target.value;
    setSuccessMsg("");
    if (input === "email") {
      setEmail(userInput);
    } else if (input === "name") {
      setName(userInput);
    }
  }

  useEffect(() => {
    if (!email.includes("@")) {
      setDisableSubmit(true);
      return;
    }

    if (email === "" || name === "") {
      setDisableSubmit(true);
      return;
    }

    setDisableSubmit(false);
  }, [email, name]);

  function onSubmit() {
    setSuccessMsg("Success");
  }

  return (
    <div>
      <h2>Exercise 4: Form validator</h2>
      <div></div>
      <div>Name:</div>
      <input type="text" onChange={(e) => updateInputs(e, "name")} />
      <div>Email:</div>
      <input type="text" onChange={(e) => updateInputs(e, "email")} />
      <button disabled={disableSubmit} onClick={onSubmit}>
        Submit
      </button>
      <div>{successMsg}</div>
    </div>
  );
}
