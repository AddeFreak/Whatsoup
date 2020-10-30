import React from 'react';
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import SignIn from '../SignIn/index'

/* import firebase from 'firebase/app' */
/* import 'firebase/auth';
 */
const Eey = styled.div`

font-family: 'Lobster', cursive;
display: flex;
  flex-wrap: wrap;
  justify-content: center;
background-color: #dfd;
height:100%;
width: 100%;
position: absolute;
div{
    margin-top: -200px;
  display: flex;
 flex-wrap: wrap;
justify-content: space-between;
 justify-content: center;
 align-items: center;
 
}
form{
    display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 flex-direction: column;
}
input{
     display: flex;
 flex-wrap: wrap;
 justify-content: space-space-around;
}
button{
      display: flex;

 
}
`
const Whaddap = styled.img`





position: flex;
justify-content: center;
background-color: #dfd;
height: 35%;
width: 100%;

`


const Landing = () => {



    return (
        <Eey >
            <Whaddap src={Logo} />
            <div><SignIn /></div>

        </Eey>
    );
};

export default Landing;