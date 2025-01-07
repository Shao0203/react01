import './App.css';
import { useReducer, useState } from 'react';
import NoteList from './components/NoteList';

let noteId = 0;

function notesReducer(notes, action) {
  switch (action.type) {
    case 'add': {
      return [...notes, { id: action.id, note: action.note }];
    }
    case 'remove': {
      return notes.filter((note) => note.id !== action.id);
    }
    default:
      throw Error('no such action!');
  }
}

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [note, setNote] = useState('');

  function handleInputChange(e) {
    setNote((prevNote) => {
      // console.log(prevNote);
      return e.target.value;
    });
  }

  function addNote() {
    // setNotes([...notes, { id: noteId++, note: note }]);
    dispatch({ type: 'add', id: noteId++, note });
    setNote('');
  }

  function handleDelete(id) {
    // setNotes(notes.filter((note) => note.id !== id));
    dispatch({ type: 'remove', id });
  }

  return (
    <main className='container'>
      <NoteList notes={notes} onDelete={handleDelete} />
      <input
        type='text'
        placeholder='写点什么吧'
        value={note}
        onChange={handleInputChange}
      />
      <button onClick={addNote}>添加笔记</button>
    </main>
  );
}

export default App;
