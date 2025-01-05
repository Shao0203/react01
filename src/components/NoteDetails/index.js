import React from 'react';
import './style.css';
import { Form, Link, useFetcher, useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  return fetch(`/api/notes/${params.noteId}`);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  return fetch(`/api/notes/${params.noteId}`, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      likes: Number(formData.get('likes')) + 1,
    }),
  });
}

function NoteDetails() {
  const note = useLoaderData();
  const fetcher = useFetcher();

  let likes = note.likes;
  if (fetcher.formData) {
    likes = Number(fetcher.formData.get('likes')) + 1;
  }

  return (
    <div>
      <h2 className='noteTitle'>{note.title}</h2>
      <div className='noteActions'>
        <Link to='edit'>编辑</Link>
        <Form method='DELETE' action='delete'>
          <button type='submit'>删除</button>
        </Form>
        <fetcher.Form method='PUT'>
          <button name='likes' value={likes} type='submit'>
            点赞 {likes}
          </button>
        </fetcher.Form>
      </div>
      <article>{note.content}</article>
    </div>
  );
}

export default NoteDetails;
