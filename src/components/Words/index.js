import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectWords, toggleRemembered } from '../../state/wordSlice';
import { pickedLanguage } from '../../state/settingsSlice';

function Words() {
  const words = useSelector(selectWords);
  const language = useSelector(pickedLanguage);
  const dispatch = useDispatch();

  return (
    <div className='words'>
      {words.map((word) => (
        <div key={word.word} className='wordCard'>
          <h3>{word.word}</h3>
          <p>{word.def}</p>
          <button
            onClick={() =>
              dispatch(toggleRemembered({ word: word.word, language }))
            }
            className={`${
              word.remembered ? 'remembered' : 'unremembered'
            } wordStatus`}
          >
            {word.remembered ? '已记' : '未记'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Words;
