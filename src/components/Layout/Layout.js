import React from 'react'
import classes from './Layout.css'
import Toolbar from '../Navigation/ToolBar/ToolBar'
import SideDraw from '../Navigation/SideDraw/SideDraw'

const Layout = (probs) => (
<>
    <Toolbar />
    <SideDraw/>
    <main className={classes.Content}>
    {probs.children}
        </main>
    </>
)

export default Layout;