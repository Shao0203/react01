import React from 'react';
import './style.css';
import { Form, useSubmit } from 'react-router-dom';

function SearchNote() {
  const submit = useSubmit();

  return (
    <div className='search'>
      <Form>
        <input
          name='term'
          type='search'
          placeholder='搜索笔记'
          onChange={(e) => submit(e.target.form)}
        />
      </Form>
    </div>
  );
}

export default SearchNote;
