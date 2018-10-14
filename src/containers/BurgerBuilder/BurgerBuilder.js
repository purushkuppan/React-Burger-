import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import * as myConstClass from '../../Constant';

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            Meat : 0,
            Cheese: 0,
            Salad: 0,
            Bacon : 0
        },
        totalPrice : 4
    }

    addMoreIngredients = (type) => {
        let oldIngredentValue = this.state.ingredients[type]
        const newIngredent = {...this.state.ingredients}
        newIngredent[type] = oldIngredentValue+1

        let newPrice = this.state.totalPrice + myConstClass.INGREDENT_PRICE[type]
        this.setState({ingredients : newIngredent, totalPrice: newPrice})
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
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls added={this.addMoreIngredients} remove={this.removeIngredients} disabled={disableValue}/>
        </>
      )
    }
}

export default BurgerBuilder;