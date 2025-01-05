import React, { useEffect } from 'react';
import './style.css';
import { Form, useLoaderData, useSubmit } from 'react-router-dom';

function SearchNote() {
  const submit = useSubmit();
  const { term } = useLoaderData();

  useEffect(() => {
    document.title = '搜索结果: ' + term;
  }, [term]);

  return (
    <div className='search'>
      <Form>
        <input
          name='term'
          type='search'
          placeholder='搜索笔记'
          onChange={(e) => {
            const isFirstSearch = term === null;
            submit(e.target.form, { replace: !isFirstSearch });
          }}
          defaultValue={term}
        />
      </Form>
    </div>
  );
}

export default SearchNote;
