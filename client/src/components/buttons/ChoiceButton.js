import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'


const ChoiceButt = styled.button`


box-sizing: border-box;
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    border: 3px solid black;
    text-decoration: 'none';
    margin:8px;
    padding:8px; 
   font-size:15px;
   font-weight: bold;
   width: 120px;
 



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
