import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  border-radius: 20px;
  margin-top: 15px;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = ({ name, age, children, click, changed }) => {
  return (
    // <div className="Person">
    <StyledDiv>
      <p onClick={click}>
        I'm a person, my name is {name}, my age is {age}
      </p>
      <p>and I am {children}</p>
      <input type="text" onChange={changed} placeholder={name} value={name} />
    </StyledDiv>
    /* </div> */
  );
};

export default Person;
