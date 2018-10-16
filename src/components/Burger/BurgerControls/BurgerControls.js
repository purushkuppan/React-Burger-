import React from 'react'

import classes from './BurgerControls.css'
import BuildControl from './BurgerControl/BurgerControl'
import * as myConstClass from '../../../Constant';

const controls = [
    {label: myConstClass.SALAD, type: myConstClass.SALAD},
    {label: myConstClass.MEAT, type: myConstClass.MEAT},
    {label: myConstClass.CHEESE, type: myConstClass.CHEESE},
    {label: myConstClass.BACON, type: myConstClass.BACON}

]

const BurgerControls = (props) => (
<div className={classes.BuildControls}>
    <p>Price :<strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(cntl => (
        <BuildControl
            key={cntl.label} label={cntl.label}
            add={()=>props.added(cntl.type)}
            remove = {()=>props.remove(cntl.type)}
            disabled={props.disabled[cntl.type]} />
    ))}

    <button className={classes.Button} disabled={!props.displayButton} onClick={props.purchased}>Order Now </button>
</div>
)

export default BurgerControls;