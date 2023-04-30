import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchData = async (input) => {
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `Complete this sentence: "${input}"`,
      model: model,
      max_tokens: 50,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          sk - YKmgWmMF9HdhcrbTHL5cT3BlbkFJP6DoLnVYJzHw9KrCp721
        }`,
      },
    }
  );

  return response.data.choices[0].text;
};
export default function ChattyApp() {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  async function handleClick() {
    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>Tell me something, and I'll tell you more</h2>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        rows={5}
        placeholder="Type in some words and I'll finish the rest..."
      />
      <button
        onClick={handleClick}
        className="bg-blueGray-400 text-white active:bg-blueGray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Generate
      </button>
      {completedSentence && <p>Completed sentence: {completedSentence}</p>}
    </div>
  );
}
