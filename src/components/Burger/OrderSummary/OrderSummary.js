import React from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
    const addedIngredients = Object.keys(props.ingredient)
        .map(igKey => {
            return (
                <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey} </span> : {props.ingredient[igKey]} </li>)
        });
   return ( <>
        <h3>Order Summary </h3>
        <p>Added Incredients: </p>
        <ul>
            {addedIngredients}
        </ul>
       <p><strong>Total Price : $ {props.price.toFixed(2)} </strong> </p>
       <p>Do you want continue? </p>
       <Button clicked={props.cancel} btnType="Danger">Cancel</Button>
       <Button clicked={props.continue} btnType="Success">Continue</Button>
    </>)
}

export default OrderSummary;

