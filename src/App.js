import { useRef, useState, useEffect } from 'react';
import './App.css';
import Sea from './assets/videos/sea.mp4';
import { ReactComponent as Play } from './assets/icons/play.svg';
import { ReactComponent as Pause } from './assets/icons/pause.svg';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // useRef to get DOM

  useEffect(() => {
    videoRef.current.play();
    setIsPlaying(true);
  }, []);

  function handlePlayClick() {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <main className='container'>
      <div>
        <VideoPlayer src={Sea} ref={videoRef} />
        <button onClick={handlePlayClick}>
          {isPlaying ? <Pause /> : <Play />}
        </button>
      </div>
    </main>
  );
}

export default App;
