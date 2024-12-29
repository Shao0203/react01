import { useState, useEffect } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    getNotes(e.target.value);
  }

  async function getNotes(params) {
    setLoading(true);
    let url = 'http://localhost:8080/notes';
    if (params) url += `?${new URLSearchParams({ term: params })}`;
    const res = await fetch(url);
    // if (res.status >= 400) {
    if (!res.ok) {
      const error = await res.json();
      setError(error);
    } else {
      const data = await res.json();
      setNotes(data);
    }
    setLoading(false);
  }

  async function handleAdd(note) {
    const res = await fetch('http://localhost:8080/notes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer SOMEJWTTOKEN',
      },
      body: JSON.stringify(note),
    });
    const data = await res.json();
    setNotes([...notes, data]);
  }

  return (
    <main className='container'>
      <div>
        <h1>我的笔记本</h1>
        <SearchNote searchTerm={searchTerm} onChange={handleSearch} />
        {loading ? <div>Loading...</div> : <NoteList notes={notes} />}
        {error && <div style={{ color: 'red' }}>{error.message}</div>}
        <AddNote onSubmit={handleAdd} />
      </div>
    </main>
  );
}

export default App;
