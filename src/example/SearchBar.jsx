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
    return (
      <>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleInputChange}
          value={this.props.text}
        />
        <label>
          <input
            type="checkbox"
            className="inline"
            checked={this.props.checked}
            onChange={this.handleCheckBoxChange}
          />
          <span className="inline">Only show products in stock</span>
        </label>
      </>
    );
  }
}

export default SearchBar;
