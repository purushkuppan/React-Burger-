import React from 'react'
import classes from './SideDraw.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const SideDraw =(props) => {
    return (
    <div className={classes.SideDrawer}>
        <Logo/>
        <nav>
            <NavigationItems/>
        </nav>

    </div>
    )
}

export default SideDraw;