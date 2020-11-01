import React, { useState } from 'react';
import styled from 'styled-components'
import LinkButton from '../buttons/LinkButton'
import Friend from './Friend'
const SendGift = styled.div`
 

 font-family: Lobster;
  display: flex;
    flex-direction: column;

   
  background: #cff;
    padding-right: 10px;
   padding-left: 10px;
 text-align: center;
 border-bottom: 2px solid black;
 .ideabutton{
width:120px;
  border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid black;
   justify-content: center;
    margin:5px;
 text-align:center;
 padding: 5px;
 }
`


const FriendOrder = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)


  //bara namn och nummer
  return (
    <SendGift>
      <h3>Would you like to send som delicious soup to a friend?</h3>
      <div><LinkButton className="ideabutton" onClick={onClick}>Great idea!</LinkButton></div>
      { showResults ? <Friend /> : null}
    </SendGift>
  );
};

export default FriendOrder;