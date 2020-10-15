
import React, { useContext } from 'react'
import styled from 'styled-components'
import AlertContext from '../../context/alert/alertContext'

const StyleAlert = styled.div`
  .alert-container {
    ${'' /* background: rgba(77, 69, 69, 0.8);
    color: white;
    font-size: 2vh;
    font-weight: 500;
    padding: 2%;
    width: 300px;
    text-align: center; */}
    width: 80%;
    margin: 0px;
    padding: 0px;
    background: yellow;
    ${'' /* z-index: 1000;
    margin-top: -300px; */}
  }

  .alert-Soup {
  background: #ffb;
 }

 .alert-Protein {
  background: #fec;
}

.alert-Bread {
  background: #cff;
}
.alert-Spreads {
  background: #dfd;
}
.alert-Treats {
  background: #ffb;
}
.alert-Beverages {
  background: #fec;
}


 .name {
    font-weight: 100;
    margin: 0;
    font-size: 25px;
    text-align: center;
    font-family: Lobster;
 }

 .text {
    margin: 0px;
    padding: 5px;
    font-weight: 100;
    font-size: 18px;
    text-align: end;
 }

`
const Alert = (props) => {
  const alertContext = useContext(AlertContext)
  const { alert, removeAlert } = alertContext

  const handleClick = (e) => {
    e.preventDefault()
    removeAlert()
  }


  return (
    alert !== null && (
      <StyleAlert>
        <div key={alert.id} className={`alert-container alert-${alert.type}`}>
          <button onClick={handleClick}> x </button>
          <h1 className='name'> {alert.name}</h1>
          <h2 className='text'> You placed {alert.name} in your shopping cart. Choose your amount or remove it with trash can</h2>
          <div> 1 </div>
          <button> DELETE</button>
          <button> ADD </button>
          <button> GO TO {alert.nextItem}</button>
        </div>
      </StyleAlert>
    )
  )
}


export default Alert
