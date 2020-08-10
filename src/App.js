import React, { useState } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
import classes from './App.css';

const StyledInfo = styled.div`
  margin: 10px 0;
`;

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
    /* Get the index of the person you want to change */
    const personIndex = personState.persons.findIndex(person => {
      return person.id === id;
    });
    /* Spread person to change into new variable */
    const person = { ...personState.persons[personIndex] };
    /* Set the name to the incoming value */
    person.name = target.value;
    /* Get the persons array and spread it into a new array */
    const persons = [...personState.persons];
    /* Replace the instance of the persons array with what we just changed */
    persons[personIndex] = person;
    /* Set the personState with the new persons array */
    setPersonState({ persons });
  };

  const deletePersonHandler = index => {
    /* Spread persons into new variable */
    const persons = [...personState.persons];
    /* Splice off the index we want to delete */
    persons.splice(index, 1);
    /* Set the personState with the new persons array */
    setPersonState({ persons });
  };

  const togglePersonsHandler = () => {
    /* Flip the showPersons variable on button press */
    setShowPersons(!showPersons);
  };

  let persons = <StyledInfo>People are hidden</StyledInfo>;

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
  }

  const assignedClasses = [];
  if (personState.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personState.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Boom goes the dynamite!</h1>
      <p className={assignedClasses.join(' ')}>*Explosion*</p>
      <button className={classes.Button} onClick={togglePersonsHandler}>
        Toggle Show Persons
      </button>
      {persons}
    </div>
  );
};

export default App;
