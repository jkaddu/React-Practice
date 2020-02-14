import React, { Component } from "react";
import classes from "./Person.module.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.UserOutput}>
        <p onClick={this.props.click}>Username: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <input
          type="text"
          placeholder="username"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
