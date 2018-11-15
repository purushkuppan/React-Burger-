import * as constClasses from '../../Constant'
import * as ActionTypes from '../Actions/ActionTypes'

const initialState = {
    ingredients : null,
    totalPrice : 3,
    error: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.inge] : state.ingredients[action.inge]+1
                },
                totalPrice : state.totalPrice+constClasses.INGREDENT_PRICE[action.inge]
            }

        case ActionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.inge] : state.ingredients[action.inge]-1
                },
                totalPrice : state.totalPrice - constClasses.INGREDENT_PRICE[action.inge]
            }


        case ActionTypes.SET_INGREDIENT:
            return {
                ...state,
                ingredients: action.ingredients,
                error : false
            }

        case ActionTypes.FETCH_INGREDIENT_FAILED:
            return {
                ...state,
                error : true
            }
        default:
            return state
    }
}

export default reducer;