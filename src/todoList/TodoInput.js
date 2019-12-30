import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  border-radius: 20px;
  border: 1px solid black;
  display: inline-block;
`;

export default function TodoInput({ onHandleOnChange, value }) {
  function handleChange(e) {
    onHandleOnChange(e);
  }

  return (
    <Input
      type="text"
      placeholder="Add todo..."
      onChange={handleChange}
      value={value}
    />
  );
}
