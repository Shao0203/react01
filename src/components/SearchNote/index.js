import React from 'react';
import './style.css';
import { Form } from 'react-router-dom';

function SearchNote() {
  return (
    <div className='search'>
      <Form>
        <input name='term' type='search' placeholder='搜索笔记' />
      </Form>
    </div>
  );
}

export default SearchNote;
