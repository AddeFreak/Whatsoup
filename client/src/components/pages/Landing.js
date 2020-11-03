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
  
 margin-top: 20px;


h1{
    text-align: center;
    background-color: #dfd;
    padding: 10px;
    margin: 0;
}
 p{
     margin-top: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 padding:10px;
 background-color: #dfd;
 padding-bottom:20px;
 margin-bottom:0px;
padding-right: 20px;
padding-left: 20px;

}
}
form{
   margin:10px;
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
 border: 2px solid black;
   border-radius: 5px;
   height: 25px;
 background-color:transparent;
 height: 35px;
    width:150px;
    font-weight:600;
} 
`
const Whaddap = styled.img`




margin:10px;
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
            <div><h1>Why what's-uop?</h1>
                <p>Sustainability - we think it's important! So important that we work with it at all levels. From a small seed that germinates the soil,  the double climate compensation of our emissions, the climate-smart packaging we deliver the food in, the use of only electric cars and bicycles, to collective agreements with all our staff. We prepare all food and it is completely organic. We try our best to support the use of local ingredients. Our prices include delivery.

                So why not support this with a soup for you or a friend, because this is food as it's souposed to be!

</p>
            </div>
        </Eey>
    );
};

export default Landing;