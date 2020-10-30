import styled from 'styled-components'

export const StyledOrder = styled.div`
background-color: #dfd;

.container {
    border-top: 2px solid black;
    height: 100vh;
    background: #dfd;
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
.form{
 display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align:center;
 
    padding-right: 10px;
   padding-left: 10px;
}
textarea{
    margin-top:5px;
}
.address{
     display: column;
   
    
    text-align:center;
 
    padding-right: 10px;
   padding-left: 10px;
}
`