import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'
import Classes from './CheckoutSummary.css'

const CheckOutSummary = (props) => {

return(
    <div className={Classes.CheckoutSummary}>
        <h1> Your Customised Burger!!! </h1>
    <div style={{width:'100%'}}>
        <Burger {...props}/>
    </div>
        <Button btnType="Danger" clicked = {props.cancelClick}>CANCEL</Button>
        <Button btnType="Success" clicked = {props.successClick}>CONTINUE</Button>
    </div>
)
}

export default CheckOutSummary;