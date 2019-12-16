import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Text from "./Text";
import CalcutionTable from "./CalculationTable";
import { HandleContext } from "./handle-context";
import ErrorBoundary from "../../ErrorBoundary";
import add from "lodash/add";
import subtract from "lodash/subtract";
import mutiply from "lodash/multiply";
import divide from "lodash/divide";
import eq from "lodash/eq";

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
  const [text, setText] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  const handleOperator = e => {
    setOperator(e.target.innerHTML);
  };

  const handleSetNum = e => {
    const value = parseInt(e.target.innerHTML);
    const setNum = num => {
      if (value === 0) {
        return num * 10;
      }
      return num * 10 + value;
    };

    if (operator.length === 0) {
      const newX = setNum(x);
      setX(newX);
    } else {
      const newY = setNum(y);
      setY(newY);
    }
  };

  const handleReset = () => {
    setX(0);
    setY(0);
    setOperator("");
    setResult(0);
  };

  const handleResult = () => {
    let result;

    switch (operator) {
      case "+":
        result = add(x, y);
        break;
      case "-":
        result = subtract(x, y);
        break;
      case "*":
        result = mutiply(x, y);
        break;
      case "/":
        result = divide(x, y);
        break;
      default:
        result = x + y;
        break;
    }

    handleReset();
    setResult(result);
  };

  useEffect(() => {
    let value;
    if (eq(y, 0)) {
      if (eq(operator.length, 0)) {
        if (eq(x, 0)) {
          value = 0;
        } else {
          value = x;
        }
      } else {
        value = String(x) + operator;
      }
    } else {
      value = String(x) + operator + String(y);
    }
    setText(value);
  }, [x, y, operator]);

  useEffect(() => {
    setText(result);
  }, [result]);

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
