import './App.css';
import Button from './components/Button';
// import ButtonInverse from './components/ButtonInverse';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme.green}>
      <main className='container'>
        {/* <ButtonInverse /> */}
        {/* <Button inverse={true} /> */}
        <Button />
      </main>
    </ThemeProvider>
  );
}

export default App;
