import { Theme, ThemeType, ThemeDescribe } from '../types/theme';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme,
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  theme: ThemeDescribe['light'],
} as ThemeContextProps);

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');
  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: ThemeDescribe[currentTheme],
      setCurrentTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => useContext(ThemeContext);


