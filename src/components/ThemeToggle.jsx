import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useAppContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
