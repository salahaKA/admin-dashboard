import React from "react";
import Calculator from "./Calculator";
import { CalculatorProvider } from "./CalculatorContext";

function App() {
  return (
    <CalculatorProvider>
      <Calculator />
    </CalculatorProvider>
  );
}

export default App;
