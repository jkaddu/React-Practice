import React from "react";
import "./Persons.css";

const persons = props => {
  const style = {
    background: "yellow",
    color: "black"
  };
  return (
    <div className="UserOutput" style={style}>
      <p onClick={props.click}>Username: {props.name}</p>
      <p>Age: {props.age}</p>
      <input
        type="text"
        placeholder="username"
        onChange={props.changed}
        value={props.name}
      />
    </div>
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
