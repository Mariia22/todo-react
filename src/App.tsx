import style from './App.module.scss';
import { ThemeProvider } from './hooks/Theme.context';
import { TodoList } from './components/TodoList/TodoList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useTheme } from './hooks/Theme.context';

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div className={style.app_wrapper}>
        <div style={{ ...theme } as React.CSSProperties} className={style.app_content}>
          <Header />
          <div style={{ ...theme } as React.CSSProperties} className={style.app_main}>
            <TodoList />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
