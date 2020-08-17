import React, { Component } from 'react';
import { Person as PersonStyle } from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return [
      <p key={'p1'} onClick={this.props.click}>
        I'm a person, my name is {this.props.name}, my age is {this.props.age}
      </p>,
      <p key={'p2'}>{this.props.children}</p>,
      <input
        key={'input1'}
        type="text"
        onChange={this.props.changed}
        placeholder={this.props.name}
        value={this.props.name}
      />,
    ];
  }
}

export default Person;
