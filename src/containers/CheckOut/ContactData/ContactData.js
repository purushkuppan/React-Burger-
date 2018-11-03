import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {

    state ={
        name: '',
        email: '',
        address: {
            street:'',
            postalCode: ''
        },
        spinner: false
    }

    orderHander = (event) =>  {
        event.preventDefault()
        console.log(this.props.ingredents)
        this.setState({spinner : true})
       const orderDetail = {
           ingredient : this.props.ingredients,
           totalPrice : this.props.totalPrice,
           address : {
               street: '6262 Home port dr',
               city : 'Fort Worth',
               state : 'TX',
               zip:'76131'
           },
           orderMethod : 'TOGO'
       }
       axios.post('/orders.json', orderDetail)
           .then( res => {
               this.setState({spinner : true, purchasable : false})
               this.props.history.push('/')
           })
           .catch(error => {this.setState({spinner : true, purchasable : false})})
    }

    render(){
        let forms = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                <input className={classes.Input} type="text" name="email" placeholder="Your name"/>
                <input className={classes.Input} type="text" name="street" placeholder="Street name"/>
                <input className={classes.Input} type="text" name="postalCode" placeholder="Zip code"/>
                <Button btnType = "Success" clicked={this.orderHander}>ORDER</Button>
            </form>
        )
        if(this.state.spinner){
            forms = <Spinner/>
        }
        return(
        <div className={classes.ContactData}>
            <h1>Enter your contact Detail</h1>
            {forms}
        </div> )
    }
}

export default ContactData;