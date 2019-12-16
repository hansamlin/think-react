import React from "react";
import Block from "./Block";
// import styled from "styled-components";

// const Tr = styled.div`
//   width: 100vw;
//   height: calc(100vh / 5);
// `;

const CalcutionTable = () => {
  const block = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    ["C", 0, "=", "+"]
  ];
  return block.map((item, index) => {
    return item.map((block, index) => {
      return <Block key={index}>{block}</Block>;
    })
    // return (
    //   <Tr key={index}>
    //     {item.map((block, index) => {
    //       return <Block key={index}>{block}</Block>;
    //     })}
    //   </Tr>
    // );
  });
};

export default CalcutionTable;
