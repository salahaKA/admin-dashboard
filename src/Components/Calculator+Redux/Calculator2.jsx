import React, { useState, useEffect } from "react";
import "./Calculator2.css"; // optional for styling

const Calculator2 = () => {
  const [input, setInput] = useState(""); // for showing numbers/operators
  const [result, setResult] = useState(""); // final result

  // Runs once when mounted
  useEffect(() => {
    console.log("✅ Calculator mounted");
  }, []);

  // Runs whenever result changes
  useEffect(() => {
    if (result !== "") {
      console.log("📊 Result updated:", result);
    }
  }, [result]);

  // Handle button click
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear input
  const clearAll = () => {
    setInput("");
    setResult("");
  };

  // Delete last character
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  // Calculate result
  const calculate = () => {
    try {
      // ⚠️ eval is not safe for production, but fine for beginner learning
      setResult(eval(input).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {result ? <h2>{result}</h2> : <h2>{input || "0"}</h2>}
      </div>

      <div className="buttons">
        <button onClick={clearAll}>AC</button>
        <button onClick={deleteLast}>DE</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("00")}>00</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button className="equal" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator2;
