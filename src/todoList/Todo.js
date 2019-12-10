import React, { useState } from "react";
import TodoInput from "./TodoInput";
import "./todo.scss";

function Row({ value, index, onHandleComplete, isComplete, onHandleDelete }) {
  const handleComplete = () => onHandleComplete(index);
  const handleDelete = () => onHandleDelete(index);
  // console.log(isComplete)
  return (
    <li style={{ textDecoration: isComplete ? "line-through" : "" }}>
      {value}
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>X</button>
    </li>
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
        <button onClick={handleClick}>Add</button>
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

// class Todo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputValue: "", list: [] };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     document.title = "Todo List";
//   }

//   handleChange(e) {
//     this.setState({ inputValue: e.target.value });
//   }

//   handleClick() {
//     let value = this.state.inputValue;
//     let list = this.state.list;

//     if (value) {
//       list.push(<li key={value}>{value}</li>);
//       this.setState({ list, inputValue: "" });
//     }
//   }

//   render() {
//     return (
//       <>
//         <React.StrictMode>
//           <TodoInput
//             handleOnChange={this.handleChange}
//             value={this.state.inputValue}
//           />
//           <button onClick={this.handleClick}>Add</button>
//           <ul>{this.state.list}</ul>
//         </React.StrictMode>
//       </>
//     );
//   }
// }

// export default Todo;
