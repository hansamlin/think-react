import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: calc(100vh / 5);
  font-size: calc(100vh / 6);
  text-align: right;
`;

const Text = () => {
  return (
    <Div>
      <span type="text">0</span>
    </Div>
  );
};

export default Text;
