import * as constClasses from '../Constant'

const initialState = {
    ingredients : {
        Salad:0,
        Meat:0,
        Cheese: 0,
        Bacon:0
    },
    totalPrice : 3
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case constClasses.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                [action.inge] : state.ingredients[action.inge]+1
                 },
            totalPrice : state.totalPrice+constClasses.INGREDENT_PRICE[action.inge]
            }
            
        case constClasses.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                ...state.ingredients,
                        [action.inge] : state.ingredients[action.inge]-1
    },
    totalPrice : state.totalPrice - constClasses.INGREDENT_PRICE[action.inge]
            }

            default:
                return state
            

    }

}

export default reducer;