import React from 'react'
import classes from './Layout.css'
import Toolbar from '../Navigation/ToolBar/ToolBar'

const Layout = (probs) => (
<>
    <Toolbar />
    <main className={classes.Content}>
    {probs.children}
        </main>
    </>
)

export default Layout;