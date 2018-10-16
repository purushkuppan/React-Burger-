import React from 'react'
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo'

const Toolbar =(props) =>(
    <header className={classes.Toolbar}>
        <Logo/>
        <div >MENU</div>

        <nav>
            ...
        </nav>

    </header>
)

export default Toolbar;