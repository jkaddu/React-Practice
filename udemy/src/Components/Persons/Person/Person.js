import React from "react";
import classes from "./Person.module.css";

const person = props => {
  console.log("[Person.js] rendering...");
  return (
    <div className={classes.UserOutput}>
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

export default person;
