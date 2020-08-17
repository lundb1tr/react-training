import React, { Component, Fragment } from 'react';
import { Person as PersonStyle } from './Person.css';
import Aux from '../../hoc/Auxiliary';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm a person, my name is {this.props.name}, my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          placeholder={this.props.name}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Person;
