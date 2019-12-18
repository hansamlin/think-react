import React, { useState, useEffect } from "react";
import { Context } from "./handle-context";

const calculate = (operator, arr) => {
  switch (operator) {
    case "+":
      return arr.reduce((accumulator, current) => accumulator + current);
    case "-":
      return arr.reduce((accumulator, current) => accumulator - current);
    case "*":
      return arr.reduce((accumulator, current) => accumulator * current);
    default:
      return arr.reduce((accumulator, current) => accumulator / current);
  }
};

const useEffectText = () => {
  const [text, setText] = useState(0);
  const [action, setAction] = useState({ type: "", target: "" });

  useEffect(() => {
    if (action.type) {
      switch (action.type) {
        case "reset": {
          setText(0);
          break;
        }

        case "=": {
          setText(prev => {
            const str = prev;
            const re = /\+|-|\*|\//;
            const operator = str.match(re);
            const arr = str.split(re);
            const arrNumber = arr.map(num => Number(num));
            return calculate(operator.shift(), arrNumber);
          });
          break;
        }

        default: {
          setText(prev => {
            if (prev === 0) return action.target;
            return prev + action.target;
          });
        }
      }
    }
  }, [action]);

  return { text, setAction };
};

const HandleContext = ({ children }) => {
  // const [text, setText] = useState(0);
  // const [action, setAction] = useState({ type: "", target: "" });

  // useEffect(() => {
  //   if (action.type) {
  //     switch (action.type) {
  //       case "reset": {
  //         setText(0);
  //         break;
  //       }

  //       case "=": {
  //         setText(prev => {
  //           const str = prev;
  //           const re = /\+|-|\*|\//;
  //           const operator = str.match(re);
  //           const arr = str.split(re);
  //           const arrNumber = arr.map(num => Number(num));
  //           return calculate(operator.shift(), arrNumber);
  //         });
  //         break;
  //       }

  //       default: {
  //         setText(prev => {
  //           if (prev === 0) return action.target;
  //           return prev + action.target;
  //         });
  //       }
  //     }
  //   }
  // }, [action]);

  const { text, setAction } = useEffectText();

  console.log("render Context");
  const contextMemo = React.useMemo(() => {
    return (
      <Context.Provider
        value={{
          text,
          setAction
        }}
      >
        {children}
      </Context.Provider>
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return contextMemo;
};

export default HandleContext;
