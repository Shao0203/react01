import React from 'react';
import './style.css';
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom';

export async function action({ request, params }) {
  const formData = await request.formData();
  const note = Object.fromEntries(formData);
  let url = '/api/notes';
  if (params.noteId) {
    url += `/${params.noteId}`;
  }
  const res = await fetch(url, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer SOMEJWTTOKEN',
    },
    body: JSON.stringify(note),
  });
  const newNote = await res.json();
  return redirect(`/notes/${newNote.id}`);
}

export async function loader({ params }) {
  return fetch(`/api/notes/${params.noteId}`);
}

function NoteForm() {
  const note = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className='addNote'>
      <h2>{note ? '编辑笔记' : '添加新笔记'}</h2>
      <Form method={note ? 'PUT' : 'POST'}>
        <input
          defaultValue={note?.title}
          name='title'
          type='text'
          placeholder='请输入笔记标题'
        />
        <textarea
          defaultValue={note?.content}
          name='content'
          rows='6'
          placeholder='请输入笔记内容'
        />
        <div className='formActions'>
          <button type='submit'>{note ? '保存笔记' : '添加笔记'}</button>
          <button type='button' onClick={() => navigate(-1)}>
            返回
          </button>
        </div>
      </Form>
    </div>
  );
}

export default NoteForm;
