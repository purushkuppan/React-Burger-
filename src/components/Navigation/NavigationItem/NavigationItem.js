import React from 'react'
import classes from './NavigationItem.css'
import {NavLink} from 'react-router-dom'

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to= {props.link} activeClassName={props.active ? classes.active : null} exact={props.exact}> {props.children} </NavLink>

    </li>
)

export default NavigationItem;