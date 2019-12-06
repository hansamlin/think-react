import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = { checkbox: false, text: "" };
  }

  handleCheckBox(value) {
    this.setState({ checkbox: value });
  }

  handleInput(value) {
    this.setState({ text: value });
  }

  getProducts() {
    return [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      }
    ];
  }

  render() {
    const PRODUCTS = this.getProducts();

    return (
      <>
        <SearchBar
          onCheckBoxChange={this.handleCheckBox}
          onInputChange={this.handleInput}
          checked={this.state.checkbox}
          text={this.state.text}
        />
        <ProductTable
          products={PRODUCTS}
          checkbox={this.state.checkbox}
          text={this.state.text}
        />
      </>
    );
  }
}

export default FilterableProductTable;
