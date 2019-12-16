import React from "react";
import Block from "./Block";

const CalcutionTable = () => {
  const block = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    ["C", 0, "=", "+"]
  ];

  return block.map(item => {
    return item.map((block, index) => {
      return (
        <Block key={index}>
          {block}
        </Block>
      );
    });
  });
};

export default CalcutionTable;
