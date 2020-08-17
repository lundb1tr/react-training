import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = ({ showPersons, clicked, title, personsLength }) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    /* Can be used like class based lifecycle hooks for updates such as http requests, etc */
    /* Get derivedStateFromProps is not included in useEffect */
    setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
    /* Empty array as second argument only runs on first render */
    /* Array such as [persons] will rerun useEffect when persons changes */
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });
  const assignedClasses = [];
  let btnClass = '';
  if (showPersons) {
    btnClass = classes.Red;
  }
  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(' ')}>*Explosion*</p>
      <button className={btnClass} onClick={clicked}>
        Toggle Show Persons
      </button>
    </div>
  );
};

/* Only re-renders if Cockpit changes, basically shouldComponentUpdate */
export default React.memo(Cockpit);
