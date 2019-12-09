import React from "react";
import TodoInput from "./TodoInput";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.input.focus();
  }

  handleClick() {
    console.log("handleClick", this.TodoInput.value);
    const item = this.state.list;
    item.push(
      <li key={this.TodoInput.value}>
        {this.TodoInput.value}
      </li>
    );

    this.setState({
      list: item
    });

    this.TodoInput.value = "";
  }

  render() {
    return (
      <>
        <TodoInput
          inputRef={input => {
            this.TodoInput = input;
          }}
        />
        <button onClick={this.handleClick}>Add</button>
        <ul>{this.state.list}</ul>
      </>
    );
  }
}

export default TodoList;
