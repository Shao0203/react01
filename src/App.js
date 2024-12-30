import { useId } from 'react';

function App() {
  const usernameId = useId();
  return (
    <main className='container'>
      <form>
        <label htmlFor={usernameId + 'username'}>User name</label>
        <input type='text' id={usernameId + 'username'} />
      </form>
    </main>
  );
}

export default App;
