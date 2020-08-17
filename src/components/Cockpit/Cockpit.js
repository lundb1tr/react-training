import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const Cockpit = ({ showPersons, clicked, title, personsLength, login }) => {
  /* Just like createRef in the class based component Person.js */
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    /* Can be used like class based lifecycle hooks for updates such as http requests, etc */
    /* Get derivedStateFromProps is not included in useEffect */
    // setTimeout(() => {
    //   alert('Saved data to cloud');
    // }, 1000);
    /* Only runs .click() after the JSX is returned */
    toggleButtonRef.current.click();
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
      <button ref={toggleButtonRef} className={btnClass} onClick={clicked}>
        Toggle Show Persons
      </button>
      <AuthContext.Consumer>
        {({ authenticated, login }) => (
          <button onClick={login}>
            {authenticated ? 'Log out' : 'Log in'}
          </button>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

/* Only re-renders if Cockpit changes, basically shouldComponentUpdate */
export default React.memo(Cockpit);
