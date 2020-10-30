import React from 'react'
import styled from 'styled-components'
import { withAuthorization } from '../Session';
import Logo from '../../assets/logo.png'


const Style = styled.div`
    background-color: #dfd;
font-family: 'Lobster', cursive;
display: flex;
position:absolute;
 flex-direction:column;
  align-items: center;
background-color: #dfd;
height:100%;
width: 100%;


`

const Loggo = styled.img`






justify-content: center;
background-color: #dfd;

width: 100%;

`


const Home = () => {
    return (
        <Style>
            <Loggo src={Logo} />
        </Style>
    )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);