import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const StyleButt = styled.button`
	border-radius: 5px;
	background-color: transparent;
	cursor: pointer;
	border: 2px solid black;
	text-decoration: 'none';
	flex-wrap: wrap;
	margin: 10px 1px 5px 0;
	width: 200px;
	height: 50px;
	font-size: 15px;
	font-weight: 600;
`;

const ChoiceButton = (props) => {
	const { history, location, match, staticContext, to, onClick, ...rest } =
		props;
	return (
		<StyleButt
			{...rest}
			onClick={(event) => {
				onClick && onClick(event);
				history.push(to);
			}}
		/>
	);
};

export default withRouter(ChoiceButton);
