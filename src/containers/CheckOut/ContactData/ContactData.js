import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'

class ContactData extends Component {

    state={
        name: '',
        email: '',
        address: {
            street:'',
            postalCode: ''
        }
    }

    render(){
        <div>
            <h1>Enter your contact Detail</h1>
                <form>
                    <input type="text" name="name" placeholder="Your name"/>
                    <input type="text" name="email" placeholder="Your name"/>
                    <input type="text" name="street" placeholder="Street name"/>
                    <input type="text" name="postalCode" placeholder="Zip code"/>
                    <Button btnType = "Success">ORDER</Button>
                </form>
        </div>
    }
}

export default ContactData;