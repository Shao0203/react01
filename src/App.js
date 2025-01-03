import { useEffect, useRef, useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

function App() {
  const linkRef = useRef(null);
  const [isIn, setIsIn] = useState(false);

  // useEffect(() => {
  //   if (linkRef.current !== null) {
  //     linkRef.current.animate(
  //       [{ opacity: 1 }, { opacity: 0.3 }, { opacity: 1 }],
  //       { duration: 1000, iterations: Infinity }
  //     );
  //   }
  // }, []);

  return (
    <main className='container'>
      <button onClick={() => setIsIn(!isIn)}>
        {isIn ? '隐藏' : '显示'}链接
      </button>
      <CSSTransition
        nodeRef={linkRef}
        in={isIn}
        timeout={1000}
        classNames='link'
        mountOnEnter
        unmountOnExit
      >
        <a href='#' className='link' ref={linkRef}>
          超链接
        </a>
      </CSSTransition>
    </main>
  );
}

export default App;
