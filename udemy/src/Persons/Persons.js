import React from "react";
import classes from "./Persons.module.css";

const persons = props => {
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

export default persons;
