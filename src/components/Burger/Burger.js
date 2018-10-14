import React from 'react';
import classes from './Burger.css';
import BurgerIncredient from '../Burger/BurgerIngredient/BurgerIngredient';
import * as myConstClass from '../../Constant';

const burger =(props) => {
    let convertedIngredents = Object.keys(props.ingredients)
        .map(igkey => {
           return [...Array(props.ingredients[igkey])].map((_,i) => {
             return <BurgerIncredient key={igkey + i} type={igkey} />
           })
        }).reduce((previousValue, currentvalue )=> {
            return previousValue.concat(currentvalue)
        }, [])

    if(convertedIngredents.length === 0) {
        convertedIngredents =  <p>Please start add ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIncredient type={myConstClass.BREAD_TOP}/>
            {convertedIngredents}
            <BurgerIncredient type={myConstClass.BREAD_BOTTOM}/>
        </div>

    )
}

export default burger;