import React from 'react';
import './Persons.css';

const persons = (props) => {
	const style = {
		border: '2px solid red'
	};
	return (
		<div className="UserOutput">
			<p onClick={props.click}>Username: {props.name}</p>
			<p>Age: {props.age}</p>
			<input type="text" style={style} placeholder="username" onChange={props.changed} value={props.name} />
		</div>
	);
};

export default persons;
