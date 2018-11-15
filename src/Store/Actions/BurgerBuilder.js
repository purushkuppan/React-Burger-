import * as ActionTypes from './ActionTypes'
import axios from "../../axios-orders";

export const addIngredients = ingredients =>{
    return(
        {
            type: ActionTypes.ADD_INGREDIENT,
            inge: ingredients
        }
    )
}

export const removeIngredients = ingredients =>{
    return(
        {
            type: ActionTypes.REMOVE_INGREDIENT,
            inge: ingredients
        }
    )
}

export const setIngredients = ingredients =>{
    return {
        type: ActionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const failIngredientsError = () =>{
    return(
        {
            type: ActionTypes.FETCH_INGREDIENT_FAILED,
        }
    )
}

export const initIngredients = ingredients =>{
    return dispatch => {
        axios.get('https://react-burger-purush.firebaseio.com/ingredients.json')
            .then(res => {
                dispatch(setIngredients(res.data))
            }).catch( error => {
             dispatch(failIngredientsError())
            })
    }
}