import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Persons/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "a1", name: "Blackpanther", age: 23 },
      { id: "b1", name: "Spiderman", age: 22 },
      { id: "c1", name: "Superman", age: 21 },
    ],
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");

    return true;
  }

  inputChangeHandler = (event, id) => {
    /* all the code here allows us to target the inputs individually,
		rendering and interacting with the component efficiently */
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    // the commented out variable below creates a new array using the slice method to modify
    // const persons = this.state.person.slice();

    // this is the more modern way of creating a new array using the spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log("[App.js] render");
    // rendering a toggle using JSX(Maximilians recommended way using the persons variable and a IF statement)
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.inputChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}

        {persons}
      </div>
    );
  }
}

export default App;
