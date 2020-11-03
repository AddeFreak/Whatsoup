import styled from 'styled-components'

export const StyledOrder = styled.div`
background-color: #dfd;

.container {
    border-top: 2px solid black;
    height: 100%;
    background: #dfd;
    font-size: 18px;
    font-weight: lighter;
    padding-top: 10px; 
    padding-bottom: 20px;
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
.addhead{
    margin:10px;
    text-align:center;
    font-family: Lobster;
    margin-bottom:-12px;
    
}
input{
    border: 1px solid black;
    margin: 8px;
    width: 100%;
    height: 30px;
      border-radius: 10px;
}
.form{
    margin-top:15px;
 display: flex;
 
    flex-direction: column;
    justify-content: center;
    text-align:center;
 border-top: 2px solid black;
 border-bottom: 2px solid black;
    padding-right: 10px;
   padding-left: 10px;
   align-items:center;
   background: #fec;
}

form {
     display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 10px;
    margin-bottom: 5px;
    width:90%;
 
}

form button{
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid black;
    text-decoration: 'none';
    margin:10px;
    font-weight: 700;
    width:40%;
    height: 30px;
}
textarea{
    margin-top:5px;
    width: 100%;
    height: 80px;
border: 1px solid black;
 border-radius: 10px;
}
.address{
     display: column;
   border: 1px solid black;
    font-weight: 300;
    text-align:center;
   background: #cff;
    padding-right: 10px;
   padding-left: 10px;
}
.address section {
    font-weight: 300;
}
.topay{
    padding-top:10px;
    margin-top: 20px;
text-align:center;
font-family: Lobster;
}
`