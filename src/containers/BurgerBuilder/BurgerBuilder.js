import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import * as myConstClass from '../../Constant';
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../components/withErrorHandler/withErrorHandler'

class BurgerBuilder extends Component {
    state = {
        ingredients : null,
        totalPrice : 4 ,
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
        const queryParams = []
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+ "="+encodeURIComponent(this.state.ingredients[i]))
        }
const queryString = queryParams.join("&")
        this.props.history.push({
            pathname: '/checkout',
            search: queryString
        });
       /* this.setState({spinner : true})
        const orderDetail = {
            ingredient : this.state.ingredients,
            totalPrice : this.state.totalPrice,
            address : {
                street: '6262 Home port dr',
                city : 'Fort Worth',
                state : 'TX',
                zip:'76131'
            },
            orderMethod : 'TOGO'
        }
        axios.post('/orders.json', orderDetail)
            .then( res => {this.setState({spinner : true, purchasable : false})})
            .catch(error => {this.setState({spinner : true, purchasable : false})})*/
    }


    render() {
        let disableValue = {
            ...this.state.ingredients
        }

        for (let key in disableValue ) {
            disableValue[key] = disableValue[key] <= 0
        }

        let orderSum = null
        if (this.state.spinner) {
            orderSum = <Spinner/>
        }

        let burger = <Spinner/>
        if (this.state.ingredients) {
            burger =(
                <>
            <Burger ingredients={this.state.ingredients} />
            <BurgerControls
            added={this.addMoreIngredients}
            remove={this.removeIngredients}
            disabled={disableValue}
            price={this.state.totalPrice}
            purchased = {this.isOrderButtonClicked}

            displayButton={this.state.displayOrder}/>
                    </>)

            orderSum = <OrderSummary ingredient = {this.state.ingredients}
                                     cancel={this.isBackDropClicked}
                                     continue={this.isContinued}
                                     price={this.state.totalPrice}/>

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

export default WithErrorHandler(BurgerBuilder, axios);