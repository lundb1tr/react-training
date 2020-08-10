import React from 'react';
import classes from './Person.css';

const Person = ({ name, age, children, click, changed }) => {
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error( 'Something went wrong' );
  }
  return (
    <div className={classes.Person}>
      <p onClick={click}>
        I'm a person, my name is {name}, my age is {age}
      </p>
      <p>and I am {children}</p>
      <input type="text" onChange={changed} placeholder={name} value={name} />
    </div>
  );
};

export default Person;
