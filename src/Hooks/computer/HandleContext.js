import React, { useState, useEffect } from "react";
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
  console.log(text);
  const handleOperator = e => {
    setOperator(e.target.innerHTML);
    console.log("handleOperator");
  };

  const handleSetNum = e => {
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
  };

  const handleReset = () => {
    setX(0);
    setY(0);
    setOperator("");
  };

  const handleResult = () => {
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
  };

  useEffect(() => {
    if (x) {
      console.log("effect x, y, operator");
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
    }
  }, [x, y, operator]);

  useEffect(() => {
    if (result) {
      console.log("effect result");
      setText(result);
    }
  }, [result]);

  console.log("render Context");
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
};

export default HandleContext;
