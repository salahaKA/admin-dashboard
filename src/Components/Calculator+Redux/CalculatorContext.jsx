import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
  input1: "",
  input2: "",
  result: 0,
};

// Reducer function
const calculatorReducer = (state, action) => {
  const n1 = parseFloat(state.input1);
  const n2 = parseFloat(state.input2);

  switch (action.type) {
    case "SET_INPUT1":
      return { ...state, input1: action.payload };
    case "SET_INPUT2":
      return { ...state, input2: action.payload };
    case "ADD":
      return { ...state, result: n1 + n2 };
    case "SUB":
      return { ...state, result: n1 - n2 };
    case "MUL":
      return { ...state, result: n1 * n2 };
    case "DIV":
      return { ...state, result: n2 !== 0 ? n1 / n2 : "Cannot divide by 0" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// Create context
export const CalculatorContext = createContext();

// Provider component
export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};
