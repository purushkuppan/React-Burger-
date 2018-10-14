import React from 'react'
import classes from './Layout.css'

const Layout = (probs) => (
<>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>
    {probs.children}
        </main>
    </>
)

export default Layout;