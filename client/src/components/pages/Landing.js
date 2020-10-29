import React from 'react';
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

/* import firebase from 'firebase/app' */
/* import 'firebase/auth';
 */
const Eey = styled.div`

font-family: 'Lobster', cursive;
display: flex;
position: absolute;
background-color: #dfd;
height:100%;
width: 100%;
font-size: 10em;
`
const Whaddap = styled.img`





position: relative;
justify-content: flex-start;
background-color: #dfd;
height: 35%;
width: 100%;

`


const Landing = () => {



    return (
        <Eey >
            <Whaddap src={Logo} />

        </Eey>
    );
};

export default Landing;