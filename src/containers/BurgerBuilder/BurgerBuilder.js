import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            Meat : 1,
            Cheese: 0,
            Salad: 1,
            Bacon : 0
        }
    }
    render() {
      return (
          <>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls/>
        </>
      )
    }
}

export default BurgerBuilder;