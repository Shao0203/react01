import { forwardRef } from 'react';
import './style.css';

function VideoPlayer({ src }, ref) {
  return (
    <div className='videoPlayer'>
      <video src={src} ref={ref} width='320' muted />
    </div>
  );
}

export default forwardRef(VideoPlayer);
