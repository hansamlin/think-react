import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th colSpan={2}>{this.props.category}</th>
        </tr>
      </thead>
    );
  }
}

export default ProductCategoryRow;
