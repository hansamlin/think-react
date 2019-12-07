import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    return React.createElement(
      "tr",
      null,
      React.createElement("td", null, this.props.name),
      React.createElement("td", null, this.props.price)
    );
    // return (
    //   <tr>
    //     <td>{this.props.name}</td>
    //     <td>{this.props.price}</td>
    //   </tr>
    // );
  }
}

export default ProductRow;
