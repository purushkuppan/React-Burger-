import React from 'react'
import classes from './SideDraw.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'

const SideDraw =(props) => {
    let attachClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <>
        <BackDrop show={props.open} clicked={props.closed} />
    <div className={attachClasses.join(' ')}>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>

    </div>
            </>
    )
}

export default SideDraw;