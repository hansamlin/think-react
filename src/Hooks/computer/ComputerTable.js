import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Text from "./Text";
import CalcutionTable from "./CalculationTable";
import { HandleContext } from "./handle-context";
import ErrorBoundary from "../../ErrorBoundary";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

const ComputerTable = () => {
  const [calculate, setCalculate] = useState({ x: 0, y: 0, operator: "" });
  const [text, setText] = useState(0);
  const [result, setResult] = useState(0);

  const handleOperator = e => {
    const newItem = { ...calculate, operator: e.target.innerHTML };
    setCalculate(newItem);
  };

  const handleSetNum = e => {
    const value = parseInt(e.target.innerHTML);
    const setNum = num => {
      if (value === 0) {
        return num * 10;
      }
      return num * 10 + value;
    };

    if (String(calculate.operator).length === 0) {
      const x = setNum(calculate.x);
      setCalculate({ ...calculate, x });
    } else {
      const y = setNum(calculate.y);
      setCalculate({ ...calculate, y });
    }
  };

  const handleReset = () => {
    setCalculate({ x: 0, y: 0, operator: "" });
  };

  const handleResult = () => {
    let result;
    const x = calculate.x;
    const y = calculate.y;
    const operator = calculate.operator;

    switch (operator) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
      default:
        result = x + y;
        break;
    }

    setCalculate({ x: 0, y: 0, operator: "" });
    setResult(result);
  };

  //   useEffect(() => {
  //   setCalculate(result);
  // }, [result]);

  useEffect(() => {
    let span;
    const item = { ...calculate };
    Object.values(item).forEach((value, index) => {
      console.log(value);
      if (item.x === 0) {
        setText(0);
        return;
      }

      // if (item.operator.length > 0) {

      // }

      if (item.y === 0) {
        return;
      }

      if (value === 0 || value.length === 0) {
        return;
      }
      console.log(span);

      return (span += String(value));
    });


  }, [calculate]);

  console.log("result", result, calculate);
  const handle = {
    handleOperator,
    handleSetNum,
    handleReset,
    handleResult
  };

  return (
    <>
      <ErrorBoundary>
        <GlobalStyle />
        <Text text={text} />
        <HandleContext.Provider value={handle}>
          <CalcutionTable />
        </HandleContext.Provider>
      </ErrorBoundary>
    </>
  );
};

export default ComputerTable;
