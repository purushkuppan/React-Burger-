import React from 'react'
import classes from './Order.css'

const order = (props) =>{
    const ingredient = []
    for (let ingredients in props.ingredient) {
        ingredient.push(
            {
                name : ingredients,
                amount : props.ingredient[ingredients]
            }
        )
    }
    const ingred = ingredient.map(ig => {
            return (<span className={classes.item} key={ig.name}>{ig.name} ({ig.amount})</span>)
        }
    )
    return(
        <div className={classes.Order}>
            <p> Ingredients : {ingred}</p>
            <p> Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order;