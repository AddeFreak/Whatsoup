import React from 'react';
import buttonsStyle from './buttonsStyle.module.css';

const DeleteButton = () => {
	return (
		<>
			<button className={buttonsStyle.buttonWithBorder}>REMOVE</button>
		</>
	);
};

export default DeleteButton;
