import { Theme, ThemeType, ThemeDescribe } from './../types/theme';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme,
  setCurrentTheme?: Dispatch<SetStateAction<ThemeType>>
}
export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  theme: ThemeDescribe['light'],
});
export const useTheme = () => useContext(ThemeContext);


