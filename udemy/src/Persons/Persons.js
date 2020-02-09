import React from "react";
//import "./Persons.css";
import styled from "styled-components";

const persons = props => {
  const StyledDiv = styled.div`
  width: 500px;
  background: teal;
  padding: 15px;
  margin: 10px;
  border: 1px solid black;
  text-align: center;

  @media (min-width: 500px) {
      width: 450px;
  `;
  return (
    // <div className="UserOutput">
    <StyledDiv>
      <p onClick={props.click}>Username: {props.name}</p>
      <p>Age: {props.age}</p>
      <input
        type="text"
        placeholder="username"
        onChange={props.changed}
        value={props.name}
      />
    </StyledDiv>
  );
};

export default persons;

// Conditional for registration or login page

// if (this.state.username === '' || this.state.password1 === '' || this.state.password2 === '') {
// 	console.lof('All Fields Required');
// 	return;
// }

// if (this.state.password1 !== this.state.password2) {
// 	console.lof("Passwords Don't Match");
// }
