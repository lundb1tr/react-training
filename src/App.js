import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    persons: [
      { name: 'Tyler', age: 34, description: 'Awesome' },
      { name: 'Luke', age: 20, description: 'Whiney' },
      { name: 'Han', age: 28, description: 'a Smuggler' },
    ],
  });

  const switchNameHandler = ({ newName }) => {
    setState({
      persons: [
        { name: newName, age: 34, description: 'still Awesome' },
        { name: 'Luke', age: 22, description: 'a Jedi' },
        { name: 'Han', age: 30, description: 'a Nerf Herder' },
      ],
    });
  };

  const nameChangedHandler = ({ target }) => {
    setState({
      persons: [
        { name: 'Tyler', age: 34, description: 'still Awesome' },
        { name: target.value, age: 22, description: 'a Jedi' },
        { name: 'Han', age: 30, description: 'a Nerf Herder' },
      ],
    });
  };

  const style = {
    backgroundColor: 'blue',
    font: 'inherit',
    border: '1px solid black',
    padding: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <h1>Boom goes the dynamite!</h1>
      <p>*Explosion*</p>
      <button
        style={style}
        onClick={() => switchNameHandler({ newName: 'T-Dogg' })}
      >
        Switch Name
      </button>
      <Person name={state.persons[0].name} age={state.persons[0].age}>
        {state.persons[0].description}
      </Person>
      <Person
        name={state.persons[1].name}
        age={state.persons[1].age}
        click={() => switchNameHandler({ newName: 'T-Money' })}
        changed={nameChangedHandler}
      >
        {state.persons[1].description}
      </Person>
      <Person name={state.persons[2].name} age={state.persons[2].age}>
        {state.persons[2].description}
      </Person>
    </div>
  );
};

export default App;

// state = {
//   persons: [
//     { name: 'Tyler', age: 34, description: 'Awesome' },
//     { name: 'Luke', age: 20, description: 'Whiney' },
//     { name: 'Han', age: 28, description: 'a Smuggler' },
//   ],
// };
