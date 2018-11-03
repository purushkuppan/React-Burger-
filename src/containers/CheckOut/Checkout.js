import React, {Component} from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'

class Checkout extends Component {
    state = {
        ingredients : null,
        totalPrice: 0
    }
    componentWillMount(){
    const query = new URLSearchParams(this.props.location.search)
        const ingredents ={}
        let price = 0;
        for (let param of query.entries()) {
        if(param[0] === "price") {
            price = param[1]
        } else {
            ingredents[param[0]] = +param[1]
        }

        }
        console.log("ingredents--->"+ingredents)
        this.setState({ingredients : ingredents, totalPrice : price})
    }

    cancelHandler= () => {
        this.props.history.goBack()
    }

    successHandler= () => {
        this.props.history.push('/checkOut/contact-data')
    }

render(){

    return(
      <div>
          <CheckoutSummary ingredients={this.state.ingredients}
                           cancelClick = {this.cancelHandler}
                          successClick = {this.successHandler}

          />
          <Route path={this.props.match.path + '/contact-data'}
                 render ={(props)=>(<ContactData  ingredients ={this.state.ingredients} totalPrice = {this.state.totalPrice} {...props}/>)}     />
      </div>
    )
}
}

export default Checkout;