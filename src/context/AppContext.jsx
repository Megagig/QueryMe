import { useContext, useState, useEffect, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ children }}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
