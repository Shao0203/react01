import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
// import About from './components/About';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const About = lazy(() => delay(3000).then(() => import('./components/About')));
// const About = lazy(() => import('./components/About'));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  function handleClick(e) {
    setShowAbout(!showAbout);
  }

  return (
    <main className='container'>
      <h1>组件懒加载</h1>
      <button onClick={handleClick}>
        {showAbout ? '隐藏关于' : '显示关于'}
      </button>
      {showAbout && (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      )}
    </main>
  );
}

export default App;
