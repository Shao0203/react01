import React from 'react';
import './style.css';

function NoteList({ notes, onDelete }) {
  return (
    <div className='noteList'>
      {notes.map((note) => (
        <div key={note.id} className='note'>
          {note.note} <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
