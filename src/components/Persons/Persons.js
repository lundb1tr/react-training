import React from 'react';
import Person from './Person/Person';

const Persons = ({ persons, clicked, changed }) => {
  return persons.map(({ id, name, age, description }, index) => {
    return (
      <Person
        key={id}
        click={() => clicked(index)}
        name={name}
        age={age}
        changed={event => changed(event, id)}
      >
        {description}
      </Person>
    );
  });
};

export default Persons;
