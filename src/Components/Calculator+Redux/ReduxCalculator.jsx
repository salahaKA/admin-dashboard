import React, { useContext } from "react";
import { CalculatorContext } from "./CalculatorContext";

const REduxCalculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="Enter first number"
          value={state.input1}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT1", payload: e.target.value })
          }
        />
        <br />
        <input
          type="number"
          placeholder="Enter second number"
          value={state.input2}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT2", payload: e.target.value })
          }
        />
      </div>

      <div>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "SUB" })}>-</button>
        <button onClick={() => dispatch({ type: "MUL" })}>*</button>
        <button onClick={() => dispatch({ type: "DIV" })}>/</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>

      <div>
        <h1>Result: {state.result}</h1>
      </div>
    </>
  );
};

export default ReduxCalculator;
