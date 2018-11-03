import React, {Component} from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredients : {
            Salad: 1,
            Meat: 1,
            Cheese: 2
        }
    }
    componentDidMount(){
    const query = new URLSearchParams(this.props.location.search)
        const ingredents ={}
        for (let param of query.entries()) {
            ingredents[param[0]] = +param[1]
        }
        console.log("ingredents--->"+ingredents)
        this.setState({ingredients : ingredents})
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
      </div>
    )
}
}

export default Checkout;