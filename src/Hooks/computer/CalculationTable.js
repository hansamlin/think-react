import React from "react";
import Block from "./Block";

const CalculationTable = () => {
  const block = [
    [
      { str: 7, type: "text" },
      { str: 8, type: "text" },
      { str: 9, type: "text" },
      { str: "/", type: "text" }
    ],
    [
      { str: 4, type: "text" },
      { str: 5, type: "text" },
      { str: 6, type: "text" },
      { str: "*", type: "text" }
    ],
    [
      { str: 1, type: "text" },
      { str: 2, type: "text" },
      { str: 3, type: "text" },
      { str: "-", type: "text" }
    ],
    [
      { str: "C", type: "reset" },
      { str: 0, type: "text" },
      { str: "=", type: "=" },
      { str: "+", type: "text" }
    ]
  ];
  console.log("render Calcution");

  return React.useMemo(
    () =>
      block.map(item => {
        return item.map((block, index) => {
          return <Block key={index} value={block} />;
        });
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};

export default CalculationTable;
