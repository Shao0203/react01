import React, { useState } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { pickedLanguage } from '../../state/settingsSlice';
import { addWord } from '../../state/wordSlice';
import { setFilter, setSearchTerm, setSort } from '../../state/actionSlice';

function Actions() {
  const [isShowingAddWordForm, setIsShowingAddWordForm] = useState(false);
  const [word, setWord] = useState('');
  const [def, setDef] = useState('');

  const dispatch = useDispatch();
  const language = useSelector(pickedLanguage);
  const searchTerm = useSelector((state) => state.action.searchTerm);
  const sort = useSelector((state) => state.action.sort);
  const filter = useSelector((state) => state.action.filter);

  function handleAddWordFormSubmit(e) {
    e.preventDefault();
    dispatch(addWord({ language, word, def }));
    setIsShowingAddWordForm(false);
    setWord('');
    setDef('');
  }

  function getButtonLabel(sort) {
    if (sort === 'desc') return 'A-Z↓';
    if (sort === 'asc') return 'A-Z↑';
    return 'A-Z';
  }

  return (
    <div className='actions'>
      <input
        type='search'
        placeholder='请输入要搜索的单词'
        className='search'
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <button onClick={() => setIsShowingAddWordForm(true)}>添加单词</button>
      <button className='reverse' onClick={() => dispatch(setSort())}>
        {getButtonLabel(sort)}
      </button>
      <form>
        <select
          name=''
          id=''
          defaultValue=''
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value=''>全部</option>
          <option value='unremembered'>未记住</option>
          <option value='remembered'>已记住</option>
        </select>
      </form>
      {isShowingAddWordForm && (
        <form className='addNewWordForm' onSubmit={handleAddWordFormSubmit}>
          <input
            type='text'
            placeholder='单词'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <input
            type='text'
            placeholder='释义'
            value={def}
            onChange={(e) => setDef(e.target.value)}
          />
          <button type='submit'>提交</button>
        </form>
      )}
    </div>
  );
}

export default Actions;
