import './App.css';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import { NotesProvider } from './context/NoteContext';

function App() {
  return (
    <NotesProvider>
      <main className='container'>
        <NoteList />
        <AddNote />
      </main>
    </NotesProvider>
  );
}

export default App;
