import React, { Component } from 'react';
import './App.css';
import UserOutput from './Persons/UserOutput';

class App extends Component {
	state = {
		usernames: [ { name: 'superman' }, { name: 'spiderman' }, { name: 'blackpanther' } ],
		showPersons: false
	};

	inputChangeHandler = (event) => {
		this.setState({ username: event.target.value });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	deletePersonsHandler = () => {};

	render() {
		const style = {
			background: 'white',
			font: 'inherit',
			border: '1px solid black',
			padding: '5px',
			cursor: 'pointer'
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{/* creating a new array and outputting a list*/}
					{this.state.usernames.map((username) => {
						return <UserOutput name={username} />;
					})}
					<UserOutput changed={this.inputChangeHandler} currentName={this.state.username[1].name} />
					<UserOutput username="Joshua" />
				</div>
			);
		}
		return (
			<div className="App">
				<header className="App-header">
					<h1>React Ways</h1>
					<button style={style} onClick={this.togglePersonsHandler}>
						Toggle Persons
					</button>
					{persons}
				</header>
			</div>
		);
	}
}

export default App;
