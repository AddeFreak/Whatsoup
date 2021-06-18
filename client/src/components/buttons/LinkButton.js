import React from 'react';
import { withRouter } from 'react-router';
import buttonsStyle from './buttonsStyle.module.css';

const LinkButton = (props) => {
	const { history, location, match, staticContext, to, onClick, ...rest } =
		props;
	return (
		<button
			className={buttonsStyle.buttonWithBorder}
			{...rest}
			onClick={(event) => {
				onClick && onClick(event);
				history.push(to);
			}}
		/>
	);
};

export default withRouter(LinkButton);
