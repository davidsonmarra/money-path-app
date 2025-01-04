import React, {createContext, useState, useEffect, useContext} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themes from 'src/configs/theme';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeContextReturn {
  theme: typeof themes.dark;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextReturn | null>(null);

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const toggleTheme = async () => {
    await AsyncStorage.setItem(
      '@moneypath:isDarkMode',
      JSON.stringify({
        isDarkMode: !isDark,
      }),
    );
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  const initializingTheme = async () => {
    try {
      const isDarkStoraged = await AsyncStorage.getItem(
        '@moneypath:isDarkMode',
      );
      if (isDarkStoraged === null) throw new Error('isDarkStoraged is null');

      AsyncStorage.setItem(
        '@moneypath:isDarkMode',
        JSON.stringify({isDarkMode}),
      );
      setIsDark(JSON.parse(isDarkStoraged).isDarkMode);
    } catch (error) {
      AsyncStorage.setItem(
        '@moneypath:isDarkMode',
        JSON.stringify({isDarkMode: false}),
      );
    }
  };

  useEffect(() => {
    initializingTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, isDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export {ThemeProvider, useTheme};
