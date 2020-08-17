import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  /* Deprecated */
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate({ persons }, nextState) {
    /* Use case, is my parent going to update and do I need to as well? */
    console.log('[Persons,js] shouldComponentUpdate');
    return persons !== this.props.persons;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map(({ id, name, age, description }, index) => {
      return (
        <Person
          key={id}
          click={() => this.props.clicked(index)}
          name={name}
          age={age}
          changed={event => this.props.changed(event, id)}
        >
          {description}
        </Person>
      );
    });
  }
}

export default Persons;
