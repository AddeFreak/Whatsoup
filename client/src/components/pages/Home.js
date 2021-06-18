import React from 'react';
import styled from 'styled-components';
import { withAuthorization } from '../Session';
import Logo from '../../assets/logo.png';
import HomeButt from '../buttons/HomeButt';

const Style = styled.div`
	background-color: #dfd;
	background-color: blue;
	font-family: 'Lobster', cursive;
	display: flex;
	position: absolute;
	flex-direction: column;
	align-items: center;
	background-color: #dfd;
	height: 100%;
	width: 100%;
`;

const Loggo = styled.img`
	position: flex;
	justify-content: center;
	background-color: #dfd;
	height: 35%;
	width: 100%;
	margin-bottom: 50px;
`;

const Home = () => {
	return (
		<Style>
			<Loggo src={Logo} />
			<HomeButt to={'/soup'}>FOR YOU</HomeButt>
			<HomeButt to={'/soup'}>FOR A FRIEND</HomeButt>
			<HomeButt>RECEIVE A GIFT</HomeButt>
		</Style>
	);
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Home);
