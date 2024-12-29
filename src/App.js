import { useState } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';

function App() {
  const [notes, setNotes] = useState([]);
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
