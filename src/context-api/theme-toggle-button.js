import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
      Toggle Theme
    </button>
  );
}

export default ThemeTogglerButton;
