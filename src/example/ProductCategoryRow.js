import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    return React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement("th", { colSpan: 2 }, this.props.category)
      )
    );

    // return (
    //   <thead>
    //     <tr>
    //       <th colSpan={2}>{this.props.category}</th>
    //     </tr>
    //   </thead>
    // );
  }
}

export default ProductCategoryRow;
