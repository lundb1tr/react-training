import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Tyler', age: 34, description: 'Awesome' },
      { name: 'Luke', age: 20, description: 'Whiney' },
      { name: 'Han', age: 28, description: 'a Smuggler' },
    ],
  });
  const [showPersons, setShowPersons] = useState(false);

  // const switchNameHandler = ({ newName }) => {
  //   setPersonState({
  //     persons: [
  //       { name: newName, age: 34, description: 'still Awesome' },
  //       { name: 'Luke', age: 22, description: 'a Jedi' },
  //       { name: 'Han', age: 30, description: 'a Nerf Herder' },
  //     ],
  //   });
  // };

  // const nameChangedHandler = ({ target }) => {
  //   setPersonState({
  //     persons: [
  //       { name: 'Tyler', age: 34, description: 'still Awesome' },
  //       { name: target.value, age: 22, description: 'a Jedi' },
  //       { name: 'Han', age: 30, description: 'a Nerf Herder' },
  //     ],
  //   });
  // };

  const deletePersonHandler = index => {
    const persons = [...personState.persons];
    persons.splice(index, 1);
    setPersonState({ persons });
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  const style = {
    buttonStyle: {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '10px',
      padding: '8px',
      cursor: 'pointer',
    },
    infoStyle: {
      margin: '10px 0',
    },
  };

  let persons = null;

  if (showPersons) {
    persons = (
      <div>
        {personState.persons.map(({ name, age }, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={name}
              age={age}
            />
          );
        })}
      </div>
    );
  } else {
    persons = <div style={style.infoStyle}>People are hidden</div>;
  }

  return (
    <div className="App">
      <h1>Boom goes the dynamite!</h1>
      <p>*Explosion*</p>
      <button style={style.buttonStyle} onClick={togglePersonsHandler}>
        Toggle Show Persons
      </button>
      {persons}
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
