// //hantera state
// // namn, id, antal, radera, pris
// //totalt pris
// //knapp cancel och knapp pay  
// import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
// import CheckoutContext from '../../context/checkout/checkoutContext'

// const Order = ({ food }) => {
//     const checkoutContext = useContext(CheckoutContext)
//     const { cancel } = checkoutContext

//     const { id, name, type, price } = food

//     const cancel = () => {
//         deleteFood(id)
//         //go to start page?

//     }

//     return (
//         <div>
//             <h4>
//                 {name}

//             </h4>
//             <h4>
//                 {price}

//             </h4>

//             <p>
//                 <button
//                     className='btn btn-dark btn-sm'
//                 //   onClick={() => payment()}
//                 >
//                     Pay
//         </button>
//                 <button onClick={cancel}>
//                     Cancel
//         </button>
//             </p>
//         </div>
//     )
// }

// ContactItem.propTypes = {
//     contact: PropTypes.object.isRequired,
// }

// export default ContactItem
