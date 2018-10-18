import React from 'react'
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar =(props) =>(
    <header className={classes.Toolbar}>
        <Logo/>
        <div >MENU</div>

        <nav>
        <NavigationItems/>
        </nav>

    </header>
)

export default Toolbar;