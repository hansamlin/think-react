import React from "react";
import TodoInput from "./TodoInput";


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", list: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.title = 'Todo List';
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleClick() {
    let value = this.state.inputValue;
    let list = this.state.list;

    if (value) {
      list.push(<li key={value}>{value}</li>);
      this.setState({ list, inputValue: "" });
    }
  }

  render() {
    return (
      <>
        <React.StrictMode>
          <TodoInput
            handleOnChange={this.handleChange}
            value={this.state.inputValue}
          />
          <button onClick={this.handleClick}>Add</button>
          <ul>{this.state.list}</ul>
        </React.StrictMode>
      </>
    );
  }
}

export default Todo;
