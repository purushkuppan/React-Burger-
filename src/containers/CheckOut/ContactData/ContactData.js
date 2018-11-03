import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'

class ContactData extends Component {

    state ={
        name: '',
        email: '',
        address: {
            street:'',
            postalCode: ''
        }
    }

    render(){
        return(
        <div className={classes.ContactData}>
            <h1>Enter your contact Detail</h1>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                    <input className={classes.Input} type="text" name="email" placeholder="Your name"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street name"/>
                    <input className={classes.Input} type="text" name="postalCode" placeholder="Zip code"/>
                    <Button btnType = "Success">ORDER</Button>
                </form>
        </div> )
    }
}

export default ContactData;