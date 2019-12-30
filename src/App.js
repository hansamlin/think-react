import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AxiosGirl from "./axios/Girl";
import ContextApi from "./context-api/context";
import Example from "./example/FilterableProductTable";
import FetchGirl from "./fetch/Girl";
import Nest from "./Hooks/Nest";
import Ref from "./ref/getDom";
import DebounceTime from "./rxjs/debounceTime/Search";
import StartCode from "./startercode";
import TodoList from "./todoList/Todo";
import TodoListRef from "./todoListUseRef/Todo";

const Index = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/axiosgirl">AxiosGirl</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li>
          <Link to="/contextapi">ContextApi</Link>
        </li>
        <li>
          <Link to="/fetchgirl">FetchGirl</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
        <li>
          <Link to="/ref">Ref</Link>
        </li>
        <li>
          <Link to="/rxjs-debouncetime">RxJs-DebounceTime</Link>
        </li>
        <li>
          <Link to="/startcode">StartCode</Link>
        </li>
        <li>
          <Link to="/todolist">Todolist</Link>
        </li>
        <li>
          <Link to="/todolistref">TodolistRef</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/axiosgirl" component={AxiosGirl} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/contextapi" component={ContextApi} />
        <Route exact path="/fetchgirl" component={FetchGirl} />
        <Route path="/hooks" component={Nest} />
        <Route exact path="/ref" component={Ref} />
        <Route exact path="/rxjs-debouncetime" component={DebounceTime} />
        <Route exact path="/startcode" component={StartCode} />
        <Route exact path="/todolist" component={TodoList} />
        <Route exact path="/todolistref" component={TodoListRef} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
