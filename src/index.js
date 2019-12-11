import "core-js/es/map";
import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "./index.scss";
// import App from './App';
// import FilterableProductTable from './example/FilterableProductTable';
// import App from './context-api/context';
// import App from "./ref/getDom";
// import Todo from "./todoListUseRef/Todo";
// import Todo from "./todoList/Todo";
// import First from "./Hooks/First";
// import Count from "./Hooks/Count";
import Girl from "./fetch/Girl";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Girl />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
