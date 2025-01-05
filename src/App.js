import './App.css';
import React, { useState } from 'react';
import NoteDetails from './components/NoteDetails';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchNote from './components/SearchNote';
import { Form, Outlet, useLoaderData } from 'react-router-dom';

export async function loader({ request }) {
  const url = new URL(request.url);
  return fetch(`/api/notes?${url.searchParams}`);
}

function App() {
  const notes = useLoaderData();

  return (
    <div className='container'>
      <aside className='sidebar'>
        <h1 className='logo'>我的笔记本</h1>
        <SearchNote />
        <Form action='notes/new'>
          <button type='submit' className='addNoteBtn'>
            添加笔记
          </button>
        </Form>
        <NoteList notes={notes} />
      </aside>
      <main className='mainContent'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
