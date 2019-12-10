import React from "react";
import ErrorBoundary from "../ErrorBoundary";
// import Button from "./button";
// import "./theme.scss";

import { ThemeContext, themes } from "./theme-context";
import ThemeTogglerButton from "./theme-toggle-button";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    // this.toggleTheme = this.toggleTheme.bind(this);

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  // toggleTheme() {
  //   this.setState(state => ({
  //     theme: state.theme === themes.dark ? themes.light : themes.dark
  //   }));
  // }

  render() {
    // The entire state is passed to the provider
    return (
      <ErrorBoundary>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
      </ErrorBoundary>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default App;
