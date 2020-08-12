import React from 'react';
import classes from './Cockpit.css';

const Cockpit = ({ showPersons, persons, clicked }) => {
  const assignedClasses = [];
  let btnClass = '';
  if (showPersons) {
    btnClass = classes.Red;
  }
  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Boom goes the dynamite!</h1>
      <p className={assignedClasses.join(' ')}>*Explosion*</p>
      <button className={btnClass} onClick={clicked}>
        Toggle Show Persons
      </button>
    </div>
  );
};

export default Cockpit;
