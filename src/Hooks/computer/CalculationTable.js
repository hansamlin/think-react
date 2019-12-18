import React from "react";
import Block from "./Block";

const CalculationTable = () => {
  const block = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    ["C", 0, "=", "+"]
  ];
  console.log("render Calcution");

  return React.useMemo(
    () =>
      block.map(item => {
        return item.map((block, index) => {
          return <Block key={index}>{block}</Block>;
        });
      }),[]
  );
};

export default CalculationTable;
