import React from 'react'
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from '../SideDraw/DrawerToggle/DrawerToggle'
const Toolbar =(props) =>(
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <DrawToggle clicked={props.drawToggleClicked}/>

        <nav className={classes.DesktopOnly  }>
        <NavigationItems/>
        </nav>

    </header>
)

export default Toolbar;