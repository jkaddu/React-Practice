// App using Radium
import React, { Component } from "react";
import "./App.css";
import Persons from "./Persons/Persons";
import Radium, { StyleRoot } from "radium";

class App extends Component {
  state = {
    persons: [
      { id: "a1", name: "Superman", age: 21 },
      { id: "b1", name: "Spiderman", age: 22 },
      { id: "c1", name: "Blackpanther", age: 23 }
    ],
    showPersons: false
  };

  inputChangeHandler = (event, id) => {
    /* all the code here allows us to target the inputs individually,
		rendering and interacting with the component efficiently */
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = personIndex => {
    // the commented out variable below creates a new array using the slice method to modify
    // const persons = this.state.person.slice();

    // this is the more modern way of creating a new array using the spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      background: "green",
      color: "black",
      font: "inherit",
      border: "1px solid black",
      padding: "5px",
      cursor: "pointer",
      ":hover": {
        background: "lightGreen",
        color: "black"
      }
    };
    // rendering a toggle using JSX(Maximilians recommended way using the persons variable and a IF statement)
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Persons
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.inputChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        background: "lightBlue",
        color: "black"
      };
    }

    return (
      <StyleRoot>
        <div className="App">
          <header className="App-header">
            <h1>React Ways</h1>
            <button style={style} onClick={this.togglePersonsHandler}>
              Toggle Persons
            </button>
            {/* Maximilians JSX recommended way(got the person variable from above and outputted it below)*/}
            {persons}
            {/* rendering a toggle using a ternary operator */}
            {/* {this.state.showPersons ? (
			  <div>
			  <Persons changed={this.inputChangeHandler} />
			  <Persons changed={this.inputChangeHandler} />
			  <Persons changed={this.inputChangeHandler} />
			  </div>
			) : null} */}
          </header>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
