import styled from 'styled-components'

export const StyledSummary = styled.div`
background-color: #dfd;

.container {
    border-top: 2px solid black;
    height: 100%;
    background: #ffb;
    font-size: 18px;
    font-weight: lighter;
    padding-top: 10px; 
    padding-bottom: 10px;
    margin: 0;
}

.container > h5 {
    margin: 0;
    padding-right: 10px;
   padding-left: 10px;
}

.cancelOk {
   display: flex;
   justify-content: space-between;
   margin: 0;
   padding-right: 5px;
   padding-left: 5px;
margin-top:7px;
}

.totalPrice, .listItems {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
    padding-right: 10px;
   padding-left: 10px;
}


.finalPrice {
    font-family: Lobster;
    font-size: 25px;
    font-weight: 100;
  padding-top: 16px;
    margin: 0;
}

.address{
     display: column;
   border: 1px solid black;
    font-weight: 300;
    text-align:center;
 padding: 10px;
   margin-bottom: 30px;
   background: #dfd;
}
.address section {
    font-weight: 300;
}
form {
  
	width: 80%;
	justify-content: center;
	margin-top: 20px;
}
.rccs__card--front{
    width: 100%;
     border: 1px solid black;
}
.rccs{
    display:flex;
    width: 100%;
}
.rccs__card--front{
    width: 100%;
}
input {
	background: #f9f9f9;
	padding: 10px;
	width: 100%;
	border: none;
    margin-bottom: 20px;
    margin-left: 20px;
	font-size: 14px;
	color: rgb(0, 0, 0);
	outline: none;
    font-weight: 300;
    text-align: center;
     border: 1px solid black;
      
}

.rccs__card--unknown > div {
	
}
`