import React, { Component } from 'react';
import { Person as PersonStyle } from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={PersonStyle}>
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
      </div>
    );
  }
}

export default Person;
