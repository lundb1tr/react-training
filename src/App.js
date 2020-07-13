import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Tyler', age: 34, description: 'Awesome' },
      { name: 'Luke', age: 20, description: 'Whiney' },
      { name: 'Han', age: 28, description: 'a Smuggler' },
    ],
  });

  const [otherState, setOtherState] = useState('some other state');

  console.log(React);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Tyler', age: 34, description: 'still Awesome' },
        { name: 'Luke', age: 22, description: 'a Jedi' },
        { name: 'Han', age: 30, description: 'a Nerf Herder' },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Boom goes the dynamite!</h1>
      <p>*Explosion*</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      >
        {personState.persons[0].description}
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        {personState.persons[1].description}
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      >
        {personState.persons[2].description}
      </Person>
    </div>
  );
};

export default App;

// state = {
//   persons: [
//     { name: 'Tyler', age: 34, description: 'Awesome' },
//     { name: 'Luke', age: 20, description: 'Whiney' },
//     { name: 'Han', age: 28, description: 'a Smuggler' },
//   ],
// };
