import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import * as myConstClass from '../../Constant';
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            Meat : 0,
            Cheese: 0,
            Salad: 0,
            Bacon : 0
        },
        totalPrice : 4 ,
        displayOrder : false,
        purchasable : false
    }

    showButton(newIngredent) {
        const sum = Object.keys(newIngredent)
            .map( igKey => {
                return newIngredent[igKey]
            }).reduce((a,b)=>{
                return a+b
            },0)
        this.setState({displayOrder: sum >0 })
    }

    addMoreIngredients = (type) => {
        let oldIngredentValue = this.state.ingredients[type]
        const newIngredent = {...this.state.ingredients}
        newIngredent[type] = oldIngredentValue+1

        let newPrice = this.state.totalPrice + myConstClass.INGREDENT_PRICE[type]
        this.setState({ingredients : newIngredent, totalPrice: newPrice})
        this.showButton(newIngredent)
    }

    removeIngredients = (type) => {

        let oldIngredentValue = this.state.ingredients[type]
        if(oldIngredentValue <=0){
            return;
        }
        const newIngredent = {...this.state.ingredients}
        newIngredent[type] = oldIngredentValue-1

        let newPrice = this.state.totalPrice - myConstClass.INGREDENT_PRICE[type]
        this.setState({ingredients : newIngredent, totalPrice: newPrice})
        this.showButton(newIngredent)
    }

    isOrderButtonClicked = () => {
        this.setState({purchasable: true})
    }

    isBackDropClicked  = () => {
        this.setState({purchasable: false})
    }

    isContinued  = () => {
        alert("Order continued..")
    }
    render() {
        let disableValue = {
            ...this.state.ingredients
        }

        for (let key in disableValue ) {
            disableValue[key] = disableValue[key] <= 0
        }
        
      return (
          <>
          <Modal show={this.state.purchasable} closed = {this.isBackDropClicked}>
              <OrderSummary ingredient = {this.state.ingredients}
                            cancel={this.isBackDropClicked}
                            continue={this.isContinued}
                            price={this.state.totalPrice}/>
          </Modal >
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
            added={this.addMoreIngredients}
            remove={this.removeIngredients}
            disabled={disableValue}
            price={this.state.totalPrice}
            purchased = {this.isOrderButtonClicked}

            displayButton={this.state.displayOrder}/>
        </>
      )
    }
}

export default BurgerBuilder;