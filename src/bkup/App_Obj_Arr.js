import './App.css';
import { useState } from 'react';

/*
function App() {
  const [list, setList] = useState([1, 2, 3, 4]);

  function handleAdd() {
    setList([...list, list.length + 1]);
  }
  function handlePlusTen(index) {
    const newList = [...list];
    newList[index] += 10;
    setList(newList);
  }
  function handleDelete(item) {
    // const newList = [...list];
    // newList.splice(index, 1);
    // setList(newList);
    setList(
      // list.filter((item) => {
      //   return list.indexOf(item) !== index;
      // })
      list.filter((value) => value !== item)
    );
  }

  return (
    <div className='container'>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handlePlusTen(index)}> +10</button>{' '}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
*/

function App() {
  const [person, setPerson] = useState({
    name: 'Tom',
    age: 25,
  });

  function handleAdd() {
    setPerson({ ...person, gender: 'Male' });
  }
  function handleEdit() {
    setPerson({ ...person, age: 43 });
  }
  function handleDelete() {
    // const newPerson = { ...person };
    // delete newPerson['name'];
    // setPerson(newPerson);
    const { name, ...newPerson } = person;
    setPerson(newPerson);
  }

  return (
    <div className='container'>
      <ul>
        {Object.keys(person).map((key, index) => (
          <li key={index}>
            {key}: {person[key]}
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Gender</button>
      <button onClick={handleEdit}>Edit Age</button>
      <button onClick={handleDelete}>Delete Name</button>
    </div>
  );
}

export default App;
