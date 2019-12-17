import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Text from "./Text";
import CalculationTable from "./CalculationTable";
import ErrorBoundary from "../../ErrorBoundary";
import HandleContext from "./HandleContext";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

const Body = styled.div`
  width: 80vw;
  margin: auto;
`;

const ComputerTable = () => {
  return (
    <>
      {console.log("render App")}
      <ErrorBoundary>
        <GlobalStyle />
        <Body>
          <HandleContext>
            <Text />
            <CalculationTable />
          </HandleContext>
        </Body>
      </ErrorBoundary>
    </>
  );
};

export default ComputerTable;
