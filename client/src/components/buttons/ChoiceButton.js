import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'


const ChoiceButt = styled.button`



   /*  border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    border: 3px solid black;
    text-decoration: 'none';
    margin: 5px;
   
   font-size:15px;
   font-weight: 600;
   width: 120px;
  */

 border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid black;
  text-decoration: 'none';
  flex-wrap: wrap;
  margin: 5px 1px 5px 0 ;
  width: 118px;
  font-size: 15px;
  font-weight: 600;
  
`
//FROM https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button
// AND FROM https://blog.usejournal.com/make-different-html-tags-behave-as-a-react-router-link-81b09c9edc6d
const ChoiceButton = (props) => {
    const {
        history,
        location,
        match,
        staticContext,
        to,
        onClick,
        // ⬆ filtering out props that `button` doesn’t know what to do with.
        ...rest
    } = props
    return (
        <ChoiceButt

            {...rest} // `children` is just another prop!
            onClick={(event) => {
                onClick && onClick(event)
                history.push(to)
            }}
        />
    )
}

export default withRouter(ChoiceButton)
