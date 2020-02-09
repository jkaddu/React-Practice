import React, { Component } from "react";
import Validation from "./Validation";

class Assign extends Component {
  state = {
    userInput: ""
  };
  changeHandler = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div class="App">
        <li>
          Create an input field with a change listener which outputs the length
          of the entered text below it
        </li>
        <li>Create a new component which reveals the text length as a prop</li>
        <li>
          Inside the ValidationComponent, either output 'Text too short' or
          'Text long enough depending on the length(e.g. 5 as min length
        </li>
        <li>Create another component and style it as a inline box</li>
        <li>
          Render a list of CharComponents where each CharComponent receives a
          different letter of the entered text as a prop
        </li>
        <li>
          When you click a CharComponent, it should be removed from the entered
          text
        </li>
        <hr />
        <input
          type="text"
          change={this.changeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
      </div>
    );
  }
}

export default Assign;
