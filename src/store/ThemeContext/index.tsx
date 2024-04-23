import React, {useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';

import AppContext from '../../hooks/useAppContext';

import Colors from '../../styles/Colors';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProviderWrapper: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const colorScheme = useColorScheme();
  const theme = useMemo(
    () => ({
      Colors: isDarkMode ? Colors.dark : Colors.light,
      isDarkMode,
      toggleTheme,
    }),
    [colorScheme, toggleTheme],
  );

  return <AppContext.Provider value={theme}>{children}</AppContext.Provider>;
};

export default AppThemeProviderWrapper;
