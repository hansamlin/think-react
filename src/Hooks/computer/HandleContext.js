import React, { useState, useEffect, useCallback } from "react";
import eq from "lodash/eq";
import add from "lodash/add";
import subtract from "lodash/subtract";
import mutiply from "lodash/multiply";
import divide from "lodash/divide";
import { Context } from "./handle-context";

const HandleContext = ({ children }) => {
  const [text, setText] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  const handleOperator = useCallback(e => {
    setOperator(e.target.innerHTML);
    console.log("handleOperator");
  }, []);

  const handleSetNum = useCallback(
    e => {
      const value = parseInt(e.target.innerHTML);
      console.log("handleSetNum");
      const setNum = num => {
        if (value === 0) {
          return num * 10;
        }
        return num * 10 + value;
      };

      if (eq(operator.length, 0)) {
        const newX = setNum(x);
        setX(newX);
      } else {
        const newY = setNum(y);
        setY(newY);
      }
    },
    [operator, x, y]
  );

  const handleReset = useCallback(() => {
    setX(0);
    setY(0);
    setOperator("");
  }, []);

  const handleResult = useCallback(() => {
    let result;
    console.log("handleResult");
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
  }, [handleReset, operator, x, y]);

  useEffect(() => {
    if (x) {
      setText(x);
    }
  }, [x]);

  useEffect(() => {
    if (operator) {
      setText(prevText => setText(String(prevText) + operator));
    }
  }, [operator]);

  useEffect(() => {
    if (y) {
      setText(prevText => setText(prevText + String(y)));
    }
  }, [y]);

  useEffect(() => {
    if (result) {
      console.log("effect result");
      setText(result);
    }
  }, [result]);

  const contextMemo = React.useMemo(() => {
    return (
      <Context.Provider
        value={{
          text,
          handleOperator,
          handleSetNum,
          handleReset,
          handleResult
        }}
      >
        {children}
      </Context.Provider>
    );
  }, [children, handleOperator, handleReset, handleResult, handleSetNum, text]);

  console.log("render Context");
  return contextMemo;
};

export default HandleContext;
