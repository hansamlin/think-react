import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./handle-context";

const Div = styled.div`
  height: calc(100vh / 5);
  font-size: calc(100vh / 6);
  text-align: right;
  background-color: rgb(46, 41, 42);
  color: #ffffff;
`;

const Text = () => {
  const { text } = useContext(Context);
  console.log("render Text", text);

  return (
    <Div>
      <span>{text}</span>
    </Div>
  );
};

export default Text;
