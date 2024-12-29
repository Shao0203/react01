import { useState, useEffect } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';

function App() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const res = await fetch('http://localhost:8080/notes');
    const data = await res.json();
    setNotes(data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <main className='container'>
      <div>
        <h1>我的笔记本</h1>
        <SearchNote />
        <NoteList notes={notes} />
        <AddNote />
      </div>
    </main>
  );
}

export default App;
