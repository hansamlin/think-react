import React from "react";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleOnChange(e);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Add todo..."
        onChange={this.handleChange}
        value={this.props.value}
      />
    );
  }
}

export default TodoInput;
