import React, { useState } from "react";
import "./Calculator3.css";

const Calculator3 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (value) => {
    setInput((prev) => prev + value);
  };

  const onClear = () => {
    setInput("");
    setResult("");
  };

  const onDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calOperation = () => {
    const res = eval(input);
    setResult(res);
    setInput(res);
  };

  return (
    <div style={{ margin:"50px"}}>
      <div
        className="container"
        style={{
          width: "260px",
          margin: "50 px auto",
          padding: "20px",
          border: "2px solid #6b1414ff",
          background: "#4f4e4eff",
          borderRadius: "10%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div
          className="display"
          style={{
            background: "white",
            color: "black",
            padding: "10px",
            marginBottom: "30px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          {/* <h1
          style={{
            fontSize: "18px",
            fontWeight: "normal",
            margin: "5px 0 0",
            color: "rgba(151, 45, 13, 1)",
          }}
        >
          Result is: {result}
        </h1> */}
        </div>
        <div
          className="button-container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "15px",
          }}
        >
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "center" }}
          >
            <button onClick={() => handleChange("9")}>9</button>
            <button onClick={() => handleChange("8")}>8</button>
            <button onClick={() => handleChange("7")}>7</button>
            <button onClick={onClear}>C</button>
          </div>
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "center" }}
          >
            <button onClick={() => handleChange("5")}>5</button>
            <button onClick={() => handleChange("4")}>4</button>
            <button onClick={() => handleChange("6")}>6</button>
            <button onClick={() => handleChange("/")}>/</button>
          </div>
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "center" }}
          >
            <button onClick={() => handleChange("3")}>3</button>
            <button onClick={() => handleChange("2")}>2</button>
            <button onClick={() => handleChange("1")}>1</button>
            <button onClick={() => handleChange("*")}>*</button>
          </div>
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "center" }}
          >
            <button onClick={() => handleChange("0")}>0</button>
            <button onClick={() => handleChange(".")}>.</button>
            <button onClick={() => handleChange("+")}>+</button>
            <button onClick={() => handleChange("-")}>-</button>
          </div>
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "center" }}
          >
            <button onClick={calOperation}>=</button>
            <button onClick={onDelete}>DEL</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator3;
