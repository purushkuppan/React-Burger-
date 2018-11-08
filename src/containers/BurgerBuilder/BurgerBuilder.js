import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import * as myConstClass from '../../Constant';
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../components/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'

class BurgerBuilder extends Component {
    state = {
        displayOrder : false,
        purchasable : false,
        spinner : false
    }


    componentDidMount (){
        axios.get('https://react-burger-purush.firebaseio.com/ingredients.json')
            .then(res => {

                this.setState({ingredients: res.data})
            })
    }

    showButton(newIngredent) {
        const sum = Object.keys(newIngredent)
            .map( igKey => {
                return newIngredent[igKey]
            }).reduce((a,b)=>{
                return a+b
            },0)
        return sum >0
    }

    isOrderButtonClicked = () => {
        this.setState({purchasable: true})
    }

    isBackDropClicked  = () => {
        this.setState({purchasable: false})
    }

    isContinued  = () => {
        this.props.history.push('/checkout');
    }


    render() {
        let disableValue = {
            ...this.props.ingre
        }

        for (let key in disableValue ) {
            disableValue[key] = disableValue[key] <= 0
        }

        let orderSum = null
        if (this.state.spinner) {
            orderSum = <Spinner/>
        }

        let burger = <Spinner/>
        if (this.props.ingre) {
            burger =(
                <>
            <Burger ingredients={this.props.ingre} />
            <BurgerControls
            added={this.props.onAddIng}
            remove={this.props.onRemove}
            disabled={false}
            price={this.props.totPrice}
            purchased = {this.isOrderButtonClicked}

            displayButton={this.showButton(this.props.ingre)}/>
                    </>)

            orderSum = <OrderSummary ingredient = {this.props.ingre}
                                     cancel={this.isBackDropClicked}
                                     continue={this.isContinued}
                                     price={this.props.totPrice}/>

        }
        if (this.state.spinner) {
            orderSum = <Spinner/>
        }

      return (
          <>

          <Modal show={this.state.purchasable} closed = {this.isBackDropClicked}>
              {orderSum}
          </Modal >
              {burger}
        </>
      )
    }
}

const setStatetoProps = state => {
    return {
        ingre: state.ingredients,
        totPrice: state.totalPrice
    }
}

const setDispachtoProps = dispatch => {
    return {
        onAddIng: (inge) => dispatch({type: myConstClass.ADD_INGREDIENT, inge: inge}),
        onRemove: (inge) => dispatch({type: myConstClass.REMOVE_INGREDIENT, inge: inge})
    }
}


export default connect(setStatetoProps, setDispachtoProps)(WithErrorHandler(BurgerBuilder, axios));