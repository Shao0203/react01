import React from 'react';
import './style.css';

function AddNote() {
  return (
    <div className='addNote'>
      <h2>添加新笔记</h2>
      <form>
        <input type='text' placeholder='请输入笔记标题' />
        <textarea rols='5' cols='30' placeholder='请输入笔记内容' />
        <button>添加笔记</button>
      </form>
    </div>
  );
}

export default AddNote;
