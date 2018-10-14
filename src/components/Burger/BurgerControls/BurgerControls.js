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
    {controls.map(cntl => (
        <BuildControl key={cntl.label} label={cntl.label} />
    ))}
</div>
)

export default BurgerControls;