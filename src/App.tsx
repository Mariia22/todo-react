import style from './App.module.scss';
import { ThemeProvider } from './hooks/Theme.context'
import { Main } from './components/Main/Main'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className={style.app_content}>
        <Header />
        <Main />
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default App;
