import React from "react";

class TodoInput extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.inputRef = React.createRef();
  // }

  render() {
    return <input type="text" placeholder="Add todo..." ref={this.props.inputRef} />;
  }
}

export default TodoInput;
