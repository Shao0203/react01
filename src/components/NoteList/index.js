import './style.css';
import { useNotes, useNotesDispatch } from '../../context/NoteContext';

function NoteList() {
  const notes = useNotes();
  const dispatch = useNotesDispatch();

  return (
    <div className='noteList'>
      {notes.map((note) => (
        <div key={note.id} className='note'>
          {note.note}{' '}
          <button onClick={() => dispatch({ type: 'delete', id: note.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
