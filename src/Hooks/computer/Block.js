import React from "react";
import styled from "styled-components";
const Div = styled.div`
  background: rgb(86, 82, 83);
  color: #ffffff;
  display: inline-block;
  width: calc(100vw / 4);
  height: calc(100vh / 5);
  line-height: calc(100vh / 5);
  text-align: center;
  font-size: calc(100vh / 8);
  border: 2px solid #000000;
  border-bottom: 0 solid #000000;
  border-left: 0 solid #000000;
`;

const Block = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Block;
