import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleCheckBoxChange(e) {
    this.props.onCheckBoxChange(e.target.checked);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("input", {
        type: "text",
        placeholder: "Seatch...",
        onChange: this.props.checked,
        value: this.props.text
      }),
      React.createElement(
        "label",
        null,
        React.createElement("input", {
          type: "checkbox",
          className: "inline",
          checked: this.props.checked,
          onChange: this.handleCheckBoxChange
        }),
        React.createElement(
          "span",
          { className: "inline" },
          "Only show products in stock"
        )
      )
    );
    // (
    //   <>
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       onChange={this.handleInputChange}
    //       value={this.props.text}
    //     />
    //     <label>
    //       <input
    //         type="checkbox"
    //         className="inline"
    //         checked={this.props.checked}
    //         onChange={this.handleCheckBoxChange}
    //       />
    //       <span className="inline">Only show products in stock</span>
    //     </label>
    //   </>
    // );
  }
}

export default SearchBar;
