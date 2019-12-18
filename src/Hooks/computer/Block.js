import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "./handle-context";
import isNumber from "lodash/isNumber";

const Div = styled.div`
  background: ${props => (props.orange ? "#fd602f" : "rgb(86, 82, 83)")};
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

const Block = ({ value }) => {
  const { setAction } = useContext(Context);

  const memoDiv = React.useMemo(() => {
    console.log("render Block");
    return (
      <Div
        onClick={e =>
          setAction({ type: value.type, target: e.target.innerHTML })
        }
        orange={isNumber(value.str) ? false : true}
      >
        {value.str}
      </Div>
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return memoDiv;
};

export default Block;
