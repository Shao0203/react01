import React, { useRef, useState } from 'react';
import Sea from '../../assets/videos/sea.mp4';
import { ReactComponent as Play } from './play.svg';
import { ReactComponent as Pause } from './pause.svg';
import './style.css';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
    <div className='videoPlayer'>
      <video src={Sea} width='320' ref={videoRef} />
      <button onClick={handlePlayClick}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </div>
  );
}

export default VideoPlayer;
