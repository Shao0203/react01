import './App.css';
import { useEffect, useState } from 'react';
import Menu from './components/Menu';

function App() {
  return (
    <Menu>
      <Menu.Item>Home|</Menu.Item>
      <Menu.Item>About|</Menu.Item>
      <Menu.Item>Contact</Menu.Item>
    </Menu>
  );
}

// function App() {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     setTimeout(() => {
//       setUser({ name: 'Tom', age: 24 });
//     }, 3000);
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <main className='container'>
//       <p>Username: {user.name}</p>
//       <p>User Age: {user.age}</p>
//     </main>
//   );
// }

// function App() {
//   const [user, setUser] = useState({
//     name: 'Bright Shao',
//     age: 36,
//     home: 'Dalian',
//   });
//   const tags = ['React', 'Vue', 'Angular'];

//   const heading = <h2>hahahahaha</h2>;

//   function addAge() {
//     const age = user.age;
//     setUser({ ...user, age: age + 1 });
//   }

//   function showHome() {
//     alert(`My hometown is ${user.home}`);
//   }

//   return (
//     <main className='container'>
//       <h1>testing</h1>
//       {heading}
//       <User user={user} handleClick={showHome}>
//         <Occupation tags={tags} />
//       </User>
//       <button onClick={addAge}>Add Age</button>
//     </main>
//   );
// }

// function User({ user, children, handleClick }) {
//   return (
//     <Fragment>
//       <p>Username: {user.name}</p>
//       <p>Age: {user.age}</p>
//       <p onClick={handleClick}>Home: {user.home}</p>
//       {children}
//     </Fragment>
//   );
// }

// function Occupation({ tags }) {
//   return (
//     <div>
//       <p>Occupation: UI Engineer</p>
//       Skills:{' '}
//       <ul>
//         {tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
