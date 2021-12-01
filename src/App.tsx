import style from './App.module.scss';
import { ThemeProvider } from './hooks/Theme.context';
import { TodoList } from './components/TodoList/TodoList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useTheme } from './hooks/Theme.context';
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  const { theme } = useTheme();
  return (
    <ThemeProvider>
      <div className={style.app_wrapper}>
        <Wrapper >
          <Header />
          <div className={style.app_main}>
            <TodoList />
          </div>
          <p className={style.app_paragraph}> Drag and drop to reorder list</p>
        </Wrapper>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
