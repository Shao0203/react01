import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  // const [theme, setTheme] = useState('Light');
  return (
    // <ThemeContext.Provider value={{ theme, setTheme }}>
    <ThemeProvider>
      <main className='container'>
        <div>
          <h1>主题切换</h1>
          <ThemeSwitcher />
          <DisplayTheme />
        </div>
      </main>
    </ThemeProvider>
    // {/* </ThemeContext.Provider> */}
  );
}

function DisplayTheme() {
  const { theme } = useTheme();
  return <p>当前主题: {theme}</p>;
}

export default App;
