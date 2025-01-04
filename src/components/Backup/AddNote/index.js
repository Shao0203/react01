import React from 'react';
import './style.css';
import { useState } from 'react';

function AddNote({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ title: title, content: content });
    setTitle('');
    setContent('');
  }

  return (
    <div className='addNote'>
      <h2>添加新笔记</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='请输入笔记标题'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rols='6'
          placeholder='请输入笔记内容'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>添加笔记</button>
      </form>
    </div>
  );
}

export default AddNote;
