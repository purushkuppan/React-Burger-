import React, {Component} from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Checkout extends Component {

    cancelHandler= () => {
        this.props.history.goBack()
    }

    successHandler= () => {
        this.props.history.push('/checkOut/contact-data')
    }

render(){

    return(
      <div>
          <CheckoutSummary ingredients={this.props.ingredients}
                           cancelClick = {this.cancelHandler}
                          successClick = {this.successHandler}

          />
          <Route path={this.props.match.path + '/contact-data'}     component = {ContactData}     />
      </div>
    )
}
}

const mapStatetoProps = state =>{
    return {
        ingredients : state.ingredients
    }
}
export default connect(mapStatetoProps)(Checkout);