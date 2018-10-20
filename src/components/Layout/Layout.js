import React, { Component } from 'react';

import classes from './Layout.css'
import Toolbar from '../Navigation/ToolBar/ToolBar'
import SideDraw from '../Navigation/SideDraw/SideDraw'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <>
                <Toolbar drawToggleClicked = {this.sideDrawerToggleHandler}/>
                <SideDraw
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}
export default Layout;