import { useState } from 'react';
import { ThemeType, ThemeDescribe } from './types/theme';
import { ThemeContext } from './hooks/Theme.context';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header'

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');
  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: ThemeDescribe[currentTheme],
      setCurrentTheme
    }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
};

export default App;
