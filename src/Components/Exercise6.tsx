import React, { useState } from "react";
import { OpenAI } from "openai";

const CHATGPT_API_KEY = "";

export default function Exercise6() {
  const [name, setName] = useState("");

  function fetchNameInfo(name: string) {
    console.log("fetching for ", name);
    chat();
  }

  function updateName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      fetchNameInfo(name);
    }
  }

  const openai = new OpenAI({
    apiKey: CHATGPT_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  async function chat() {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "How do I use the ChatGPT API?" },
      ],
    });

    console.log(response.choices[0].message.content);
  }

  return (
    <div>
      <h2>Exercise 6: Name information using chatgpt API</h2>
      <input
        type="text"
        placeholder={"Enter your name"}
        onChange={updateName}
        onKeyDown={handleKeyPress}
      />
      <button onClick={() => fetchNameInfo(name)}>Submit</button>
    </div>
  );
}
