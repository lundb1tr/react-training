import React, { PureComponent } from 'react';
import Person from './Person/Person';

/* PureComponent is a normal component that runs shouldComponentUpdate with a complete props check */
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  /* Deprecated */
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  /* Unnecessary in PureComponent */
  // shouldComponentUpdate({ persons, changed, clicked }, nextState) {
  //   /* Use case, is my parent going to update and do I need to as well? */
  //   console.log('[Persons,js] shouldComponentUpdate');
  //   return (
  //     persons !== this.props.persons ||
  //     changed !== this.props.changed ||
  //     clicked !== this.props.clicked
  //   );
  // }

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

  /* Doesn't immediately update the 'real' DOM.  If differences are found it updates the 'real' DOM and if no differences are found it does not re-render the 'real' DOM */
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
