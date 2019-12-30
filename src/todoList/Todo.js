import React, { useState } from "react";
import TodoInput from "./TodoInput";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 20px;
  border: 1px;
  color: white;
  background-color: black;
  padding: 0.5em;
  display: inline-block;
`;

const Li = styled.li`
  list-style: none;
`;

function Row({ value, index, onHandleComplete, isComplete, onHandleDelete }) {
  const handleComplete = () => onHandleComplete(index);
  const handleDelete = () => onHandleDelete(index);

  return (
    <Li style={{ textDecoration: isComplete ? "line-through" : "" }}>
      {value}
      <Button onClick={handleComplete}>Complete</Button>
      <Button onClick={handleDelete}>X</Button>
    </Li>
  );
}

export default function Todo() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  function handleClick() {
    if (value) {
      const newList = [...list];
      setList([...newList, { value, isComplete: false }]);
      setValue("");
    }
  }

  function handleComplete(index) {
    const newList = [...list];
    newList[index].isComplete = true;
    setList(newList);
  }

  function handleDelete(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  return (
    <>
      <React.StrictMode>
        <TodoInput onHandleOnChange={handleChange} value={value} />
        <Button onClick={handleClick}>Add</Button>
        <ul>
          {list.map((item, index) => {
            return (
              <Row
                key={index}
                index={index}
                value={item.value}
                onHandleComplete={handleComplete}
                onHandleDelete={handleDelete}
                isComplete={item.isComplete}
              />
            );
          })}
        </ul>
      </React.StrictMode>
    </>
  );
}
