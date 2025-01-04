import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function NoteList({ notes }) {
  return (
    <nav className='noteList'>
      {notes.map((note) => (
        <div key={note.id} className='note'>
          <NavLink
            to={`notes/${note.id}`}
            className={({ isActive, isPending }) => (isActive ? 'active' : '')}
          >
            {note.title}
          </NavLink>
          <p className='contentExerpt'>
            {note.content.substring(0, 20) + '...'}
          </p>
        </div>
      ))}
    </nav>
  );
}

export default NoteList;
