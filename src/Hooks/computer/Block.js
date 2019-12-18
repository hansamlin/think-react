import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./handle-context";

const Div = styled.div`
  background: rgb(86, 82, 83);
  color: #ffffff;
  display: inline-block;
  width: calc(100% / 4);
  height: calc(100vh / 5);
  line-height: calc(100vh / 5);
  text-align: center;
  font-size: calc(100vh / 8);
  border: 2px solid #000000;
  border-bottom: 0 solid #000000;
  border-left: 0 solid #000000;
`;

const Block = ({ children }) => {
  const {
    handleOperator,
    handleSetNum,
    handleReset,
    handleResult
  } = useContext(Context);

  let handle;

  switch (children) {
    case "C":
      handle = handleReset;
      break;
    case "+":
      handle = handleOperator;
      break;
    case "-":
      handle = handleOperator;
      break;
    case "*":
      handle = handleOperator;
      break;
    case "/":
      handle = handleOperator;
      break;
    case "=":
      handle = handleResult;
      break;
    default:
      handle = handleSetNum;
      break;
  }

  const memoDiv = React.useMemo(() => {
    return <Div onClick={handle}>{children}</Div>;
  }, [children, handle]);

  console.log("render Block");
  return memoDiv;
};

export default Block;
