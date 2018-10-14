import React from 'react';
import classes from './Burger.css';
import BurgerIncredient from '../Burger/BurgerIngredient/BurgerIngredient';
import * as myConstClass from '../../Constant';

const burger =(probs) => {
    return (
        <div className={classes.Burger}>
            <BurgerIncredient type={myConstClass.BREAD_TOP}/>
            {/*<BurgerIncredient type={myConstClass.CHEESE}/>
            <BurgerIncredient type={myConstClass.SALAD}/>
            <BurgerIncredient type={myConstClass.MEAT}/>
            <BurgerIncredient type={myConstClass.BREAD_BOTTOM}/>*/}
        </div>

    )
}

export default burger;