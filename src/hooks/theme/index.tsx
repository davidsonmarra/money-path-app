import React, {createContext, useState, useEffect, useContext} from 'react';
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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    // setIsDark(isDark);
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
