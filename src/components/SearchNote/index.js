import React from 'react';
import './style.css';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';

function SearchNote() {
  const submit = useSubmit();
  const { term } = useLoaderData();

  return (
    <div className='search'>
      <Form>
        <input
          name='term'
          type='search'
          placeholder='搜索笔记'
          onChange={(e) => submit(e.target.form)}
          defaultValue={term}
        />
      </Form>
    </div>
  );
}

export default SearchNote;
