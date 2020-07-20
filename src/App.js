import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: '1234', name: 'Tyler', age: 34, description: 'Awesome' },
      { id: '5678', name: 'Luke', age: 20, description: 'Whiney' },
      { id: '90-=', name: 'Han', age: 28, description: 'a Smuggler' },
    ],
  });
  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = ({ target }, id) => {
    const personIndex = personState.persons.findIndex(person => {
      return person.id === id;
    });
    const person = { ...personState.persons[personIndex] };
    person.name = target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;
    setPersonState({ persons });
  };

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
        {personState.persons.map(({ id, name, age, description }, index) => {
          return (
            <Person
              key={id}
              click={() => deletePersonHandler(index)}
              name={name}
              age={age}
              changed={event => nameChangedHandler(event, id)}
            >
              {description}
            </Person>
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
