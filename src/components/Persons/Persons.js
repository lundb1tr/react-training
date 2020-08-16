import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons,js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot);
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
