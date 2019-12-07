import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    let list = [],
      lastCategory = null,
      checkbox = this.props.checkbox,
      filterText = this.props.text;

    const products = this.props.products;

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      if (checkbox && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        list.push(
          // <ProductCategoryRow
          //   category={product.category}
          //   key={product.category}
          // />
          React.createElement(ProductCategoryRow, {
            category: product.category,
            key: product.category
          })
        );
      }

      // const ProductRow = React.createElement();
      list.push(
        // <ProductRow
        //   name={product.name}
        //   price={product.price}
        //   key={product.name}
        // />
        React.createElement(ProductRow, {
          name: product.name,
          price: product.price,
          key: product.name
        })
      );

      lastCategory = product.category;
    });

    // return (
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Price</th>
    //       </tr>
    //     </thead>
    //     <tbody>{list}</tbody>
    //   </table>
    // );

    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement("th", null, "Name"),
          React.createElement("th", null, "Price")
        )
      ),
      React.createElement("tbody", null, list)
    );
  }
}

export default ProductTable;
