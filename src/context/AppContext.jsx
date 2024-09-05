import { useContext, useState, useEffect, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
  };
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
