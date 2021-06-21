import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const ChoiceButtonStyle = styled.button`
	border-radius: 10px;
	background-color: transparent;
	cursor: pointer;
	border: 2px solid black;
	text-decoration: 'none';
	flex-wrap: wrap;
	margin: 5px;
	height: 40px;
	width: 109px;
	font-size: 15px;
	font-weight: 600;
`;

const ChoiceButton = (props) => {
	const { history, location, match, staticContext, to, onClick, ...rest } =
		props;
	return (
		<ChoiceButtonStyle
			{...rest}
			onClick={(event) => {
				onClick && onClick(event);
				history.push(to);
			}}
		/>
	);
};

export default withRouter(ChoiceButton);
