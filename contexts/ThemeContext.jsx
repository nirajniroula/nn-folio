import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };
  return (
    <div>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, ThemeProvider };
