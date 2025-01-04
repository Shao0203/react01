import React from 'react';
import './style.css';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  return fetch(`/api/notes/${params.noteId}`);
}

function NoteDetails() {
  const note = useLoaderData();
  return (
    <div>
      <h2 className='noteTitle'>{note.title}</h2>
      <div className='noteActions'>
        <a href='edit'>编辑</a>
        <form>
          <button type='submit'>删除</button>
        </form>
        <form>
          <button type='submit'>点赞 {note.likes}</button>
        </form>
      </div>
      <article>{note.content}</article>
    </div>
  );
}

export default NoteDetails;
