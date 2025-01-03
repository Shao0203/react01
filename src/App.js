import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const refLink = useRef(null);

  useEffect(() => {
    if (refLink.current !== null) {
      refLink.current.animate(
        [{ opacity: 1 }, { opacity: 0.3 }, { opacity: 1 }],
        { duration: 1000, iterations: Infinity }
      );
    }
  }, []);

  return (
    <main className='container'>
      <a href='#' className='link' ref={refLink}>
        超链接
      </a>
    </main>
  );
}

export default App;
