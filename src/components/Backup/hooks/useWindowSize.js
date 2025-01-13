import { useEffect, useState } from 'react';

function useWindowSize(throttleDuration = 500) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
          timeoutId = null;
        }, throttleDuration);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timeoutId);
    };
  }, [throttleDuration]);

  return windowSize;
}

export default useWindowSize;
