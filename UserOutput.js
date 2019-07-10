import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
	const style = {
		border: '2px solid red'
	};
	return (
		<div className="UserOutput">
			<p>Username: {props.username}</p>
			<p>Change Text</p>
			<input
				type="text"
				style={style}
				placeholder="username"
				onChange={props.changed}
				value={props.currentName}
			/>
		</div>
	);
};

export default userOutput;
