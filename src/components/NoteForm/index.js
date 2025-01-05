import React from 'react';
import './style.css';
import { Form, redirect } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);
  const note = Object.fromEntries(formData);
  console.log(note);
  const res = await fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer SOMEJWTTOKEN',
    },
    body: JSON.stringify(note),
  });
  const newNote = await res.json();
  return redirect(`/notes/${newNote.id}`);
}

function NoteForm() {
  const note = null;
  return (
    <div className='addNote'>
      <h2>{note ? '编辑笔记' : '添加新笔记'}</h2>
      <Form method='POST'>
        <input name='title' type='text' placeholder='请输入笔记标题' />
        <textarea name='content' rows='6' placeholder='请输入笔记内容' />
        <div className='formActions'>
          <button type='submit'>{note ? '保存笔记' : '添加笔记'}</button>
        </div>
      </Form>
    </div>
  );
}

export default NoteForm;
