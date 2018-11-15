import * as ActionTypes from '../Actions/ActionTypes'
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
    return  {
        type : ActionTypes.PURCHASE_BURGER_SUCCESS,
        orderId : id,
        orderData : orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return  {
        type : ActionTypes.PURCHASE_BURGER_FAIL,
        error : error
    }
}

export const  purchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data, orderData)   )
            })
            .catch(error => {
                dispatch(purchaseBurgerSuccess(error))
            })
    }
}