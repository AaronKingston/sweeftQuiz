import {createContext, useState} from 'react';

const ThemeContext = createContext(undefined);

export const ThemeContextProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    console.log('Switch toggled');
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
