import React from 'react';
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import SignUp from './index'

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
  
 margin-top: -52px;



 
}
form{
   
display: table-column;



}
input{
    height: 30px;
    width:150px;
     display: flex;
    
  margin: 9px 8px;
  border: 2px solid black;
   border-radius: 5px;
   
}
 button{
 border: 1px solid black;
   border-radius: 5px;
   height: 25px;
 background-color: transparent;
} 
`
const Whaddap = styled.img`





position: flex;
justify-content: center;
background-color: #dfd;
height: 35%;
width: 100%;

`


const SignUpLanding = () => {



    return (
        <Eey >
            <Whaddap src={Logo} />
            <div><SignUp /></div>

        </Eey>
    );
};

export default SignUpLanding;