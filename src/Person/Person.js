import React from 'react';

const Person = ({ name, age, children }) => {
  return (
    <div>
      <p>
        I'm a person, my name is {name}, my age is {age}
      </p>
      <p>and I am {children}</p>
    </div>
  );
};

export default Person;
