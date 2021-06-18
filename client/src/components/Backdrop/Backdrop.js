import React from 'react';
import styled from 'styled-components';

const StyledDrop = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.3);
	z-index: 100;
	top: 0;
	right: 0;
`;

const backdrop = (props) => <StyledDrop onClick={props.click} />;
export default backdrop;
