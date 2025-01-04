import './App.css';
import React, { useState } from 'react';
import NoteDetails from './components/NoteDetails';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className='container'>
      <aside className='sidebar'>
        <h1 className='logo'>我的笔记本</h1>
        <SearchNote />
        <button type='submit' className='addNoteBtn'>
          添加笔记
        </button>
        <NoteList notes={notes} />
      </aside>
      <main className='mainContent'>
        <NoteDetails />
      </main>
    </div>
  );
}

export default App;
