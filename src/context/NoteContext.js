import { createContext, useContext, useReducer } from 'react';

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

// defined the Reducer
function notesReducer(notes, action) {
  switch (action.type) {
    case 'add': {
      return [...notes, { id: action.id, note: action.note }];
    }
    case 'delete': {
      return notes.filter((note) => note.id !== action.id);
    }
    default:
      throw Error('no such action!');
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
