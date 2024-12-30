import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';
// import request from './utils/request';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    getNotes(e.target.value, new AbortController());
  }

  async function getNotes(params, controller) {
    setLoading(true);
    let url = '/api/notes';
    if (params) url += `?${new URLSearchParams({ term: params })}`;

    try {
      const res = await axios.get(url, {
        signal: controller.signal,
      });
      setNotes(res.data);
    } catch (e) {
      if (e.response?.data) setError(e.response?.data);
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(note) {
    const res = await axios.post('/api/notes', note, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer SOMEJWTTOKEN',
      },
    });
    setNotes([...notes, res.data]);
  }

  useEffect(() => {
    const controller = new AbortController();
    getNotes(null, controller);

    return () => {
      controller.abort();
    };
  }, []);

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
