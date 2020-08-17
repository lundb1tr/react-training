import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Person as PersonStyle } from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = createRef();
  }
  componentDidMount() {
    /* Selects the first found input box */
    //   document.querySelector('input').focus();
    /* Selects last item in list */
    // this.inputElement.focus();
    /* Gets current reference */
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a person, my name is {this.props.name}, my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          /* Only works in class based components, works in older versions of React */
          // ref={inputElement => {
          //   this.inputElement = inputElement;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          placeholder={this.props.name}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, PersonStyle);
