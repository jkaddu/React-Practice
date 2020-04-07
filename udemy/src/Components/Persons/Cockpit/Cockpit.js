import React from "react";
import classes from "./cockpit.module.css";
import AuthContext from "../../../context/auth-context";

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
      <AuthContext.Consumer>
        {(context) => (
          <button className={classes.button} onClick={context.login}>
            Log In
          </button>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
