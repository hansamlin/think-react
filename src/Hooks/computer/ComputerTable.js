import React from "react";
import { createGlobalStyle } from "styled-components";
import Text from "./Text";
import CalcutionTable from "./CalculationTable";

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
  return (
    <>
      <GlobalStyle />
      <Text />
      <CalcutionTable />
    </>
  );
};

export default ComputerTable;
