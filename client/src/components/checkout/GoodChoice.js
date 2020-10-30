import React from 'react';
import styled from 'styled-components'
//import LinkButton from '../buttons/LinkButton'
import ChoiceButton from '../buttons/ChoiceButton'
const GoodChoiceStyle = styled.div`
 border-top: 3px solid black;
background: #ffb;
font-family: 'Lobster', cursive;
display: flex; 
justify-content: center;
flex-wrap: wrap;
align-items: center;
text-align:center;
padding-bottom: 20px;
h1{
    font-size:45px;
    margin-bottom: 0;
    font-weight: 400;
}
h3{
    font-size: 25px;
     font-weight: 400;
}
.item {
  width: 100%
}
.Linkstyle{
 display:flex;

/*  justify-content: center;
 padding-bottom:10px;
 margin-right: 10px;
flex-direction:column; */
width: 100%;
flex-wrap: wrap;
/* align-items: center;
text-align:center; */
}
.Linkstyle>div {
  flex: 0 50%;
  /*demo*/

  box-sizing:border-box
}

`

const GoodChoice = () => {
    return (
        <GoodChoiceStyle>
            <h1>Good Choice!</h1>
            <h3>Do you feel pleased or do you want something more?</h3>
            <div className="Linkstyle">
                <div className="item"> <ChoiceButton to={'/soup'}>SOUP</ChoiceButton></div>
                <div className="item"><ChoiceButton to={'/protein'}>PROTEIN</ChoiceButton></div>
                <div className="item"> <ChoiceButton to={'/bread'}>BREADS</ChoiceButton></div>
                <div className="item">  <ChoiceButton to={'/spreads'}>SPREADS</ChoiceButton></div>
                <div className="item">  <ChoiceButton to={'/treats'}>TREATS</ChoiceButton></div>
                <div className="item">  <ChoiceButton to={'/beverages'}>BEVERAGES</ChoiceButton></div>
            </div>
        </GoodChoiceStyle>
    );
};

export default GoodChoice; 