import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
	.toggle-button {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 24px;
		width: 30px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 0;
		box-sizing: border-box;
	}
	.toggle-button:focus {
		outline: none;
	}
	.toggle-button-line {
		width: 30px;
		height: 2px;
		background: black;
	}
`;

const drawerToggleButton = (props) => (
	<StyledButton>
		<button className='toggle-button' onClick={props.click}>
			<div className='toggle-button-line' />
			<div className='toggle-button-line' />
			<div className='toggle-button-line' />
		</button>
	</StyledButton>
);

export default drawerToggleButton;
