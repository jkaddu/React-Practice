import React from "react";
import classes from "./cockpit.module.css";

const cockpit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button
        className={classes.button}
        showPersons={props.showPersons}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
