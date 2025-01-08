import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';
import {
  selectRemainingWords,
  selectRememberedWords,
} from '../../state/wordSlice';

function Progress() {
  const remembered = useSelector(selectRememberedWords);
  const remaining = useSelector(selectRemainingWords);

  return (
    <div className='progress'>
      <progress value={remembered} min={0} max={remembered + remaining} />
      <span>{(remembered / (remembered + remaining)).toFixed(2) * 100}%</span>
      <p>已记住：{remembered} 个</p>
      <p>剩余：{remaining} 个</p>
    </div>
  );
}

export default Progress;
