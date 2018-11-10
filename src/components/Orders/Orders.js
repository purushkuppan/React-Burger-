import React, {Component} from 'react'
import Order from '../Order/Order'
import axios from "../../axios-orders";
import WithErrorHandler from '../withErrorHandler/withErrorHandler'

class Orders extends Component {
    state={
        spinner: false,
        orders: []
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                this.setState({spinner: true})
                console.log(res.data)
               let fetchOrders =[]
                for (let key in res.data) {
                    fetchOrders.push({...res.data[key], id : key})
                }
                this.setState({spinner: true, orders: fetchOrders})
            })
            .catch(error => {
                this.setState({spinner: true, purchasable: false})
            })
    }
    render(){
        return(
            <div>
                {this.state.orders.map(order=>{
                    return <Order key={order.id}
                                  ingredient= {order.ingredients}
                                  price= {order.price}/>
                })}
            </div>
        )
    }
}

export default WithErrorHandler(Orders, axios);