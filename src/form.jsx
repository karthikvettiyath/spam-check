import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {

      const response = await axios.post("/api/spam-check", { text: input });
      setResult(response.data.result);
    } catch (error) {
      setResult("Error: Could not check for spam.");
    }
    setLoading(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <h2>Spam detector</h2>
      </label>
      <label>
        <textarea
          id="spam-input"
          placeholder="Enter text to check for spam"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Checking..." : "Submit"}
      </button>
      {result && (
        <div style={{ marginTop: "1rem", color: result.startsWith("Error") ? "#ff4d4f" : "#4caf50" }}>
          {result}
        </div>
      )}
    </form>
  );
};

export default Form;