import React from 'react';

function NoteList({ notes, onDelete }) {
  return (
    <div className='container'>
      {notes.map((note) => (
        <p key={note.id}>
          {note.note} <button onClick={() => onDelete(note.id)}>Remove</button>
        </p>
      ))}
    </div>
  );
}

export default NoteList;
