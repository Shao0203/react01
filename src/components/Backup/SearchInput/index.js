import React, { useState } from 'react';

function SearchInput({ onChange }) {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
    // console.log(e.target.value);
    onChange(e.target.value);
  }

  return (
    <main>
      <input
        type='text'
        placeholder='type something...'
        value={query}
        onChange={handleChange}
      />
    </main>
  );
}

export default SearchInput;
