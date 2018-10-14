import React, {Component} from 'react'
import PropTypes from 'prop-types'

import classes from './BurgerIngredient.css'
import * as myConstClass from '../../../Constant';

class BurgerIncredient extends Component {
    render () {
        let incredent = null
        switch (this.props.type) {
            case (myConstClass.BREAD_BOTTOM) :
                incredent = <div className={classes.BreadBottom}></div>
                break;
            case (myConstClass.BREAD_TOP) :
                incredent = (
                    <div>
                        <div className={classes.BreadTop}>
                            <div className={classes.Seeds1}></div>
                            <div className={classes.Seeds2}></div>
                        </div>
                    </div>
                )
                break;
            case (myConstClass.MEAT) :
                incredent = <div className={classes.Meat}></div>
                break;
            case (myConstClass.CHEESE) :
                incredent = <div className={classes.Cheese}></div>
                break;
            case (myConstClass.SALAD) :
                incredent = <div className={classes.Salad}></div>
                break;
            case (myConstClass.BACON) :
                incredent = <div className={classes.Bacon}></div>
                break;
            default:
                incredent = null;
        }
        return incredent;
    }

}

BurgerIncredient.proptypes = {

    type : PropTypes.string.isRequired
}

export default BurgerIncredient;