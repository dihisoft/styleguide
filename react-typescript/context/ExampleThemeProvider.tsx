'use client';

import { darkTheme, lightTheme } from '@/styles/theme';
import React, { useMemo, useState } from 'react';

import { ThemeContext } from 'styled-components';

export const ExampleThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ExampleThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState('light');

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme(prevTheme =>
          prevTheme === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [theme],
  );

  return (
    <ExampleThemeContext.Provider value={value}>
      <ThemeContext.Provider
        value={theme === 'light' ? lightTheme : darkTheme}
      >
        {children}
      </ThemeContext.Provider>
    </ExampleThemeContext.Provider>
  );
};
