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
 margin: 0;
    text-align: center;
width:100%; 


h1{
    font-size:45px;
    margin-bottom: 0;
    font-weight: 400;
}
h3{
    font-size: 25px;
     font-weight: 400;
}

.Linkstyle{
display:flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 0;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0px 0px 20px 0px;

}
ul {
    list-style: none;
    ${'' /* display:flex; 
    flex-direction: column; */}
    display:flex; 
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 0;
    margin: 5px;
    padding: 0px 0px 20px 0px;
    
}
li {
    width: 110px;
    margin: 3px;
}

`

const GoodChoice = () => {
    return (
        <GoodChoiceStyle>
            <h1>Good Choice!</h1>
            <h3>Do you feel pleased or do you want something more?</h3>
            <ul>
                <li><ChoiceButton to={'/soup'}>SOUP</ChoiceButton></li>
                <li><ChoiceButton to={'/protein'}>PROTEIN</ChoiceButton></li>
                <li><ChoiceButton to={'/extras'}>EXTRAS</ChoiceButton></li>
                {/* <li><ChoiceButton to={'/bread'}>BREADS</ChoiceButton></li>
                <li><ChoiceButton to={'/spreads'}>SPREADS</ChoiceButton></li>
                <li><ChoiceButton to={'/treats'}>TREATS</ChoiceButton></li> */}
                <li><ChoiceButton to={'/beverages'}>BEVERAGES</ChoiceButton></li>







            </ul>
        </GoodChoiceStyle>
    );
};

export default GoodChoice; 