import React from "react";
import Input from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(this.Input);

  }

  handleClick() {
    console.log(this.Input);
  }

  render() {
    return (
      <div className="App">
        <Input
          ref={text => {
            this.Input = text;
          }}
        />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
