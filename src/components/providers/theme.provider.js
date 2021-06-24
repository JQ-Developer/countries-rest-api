import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  //Checks for local storage for config, set false by default
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const data = localStorage.getItem("theme");
    return data ? JSON.parse(data) : false;
  });

  //Saves theme configuration
  const saveLocalData = (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  };

  //Toggles dark mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  //Updates each time dark mode is changed
  useEffect(() => {
    saveLocalData("theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
