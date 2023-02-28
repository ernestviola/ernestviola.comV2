import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'

import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';



const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState(false)

  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List>
                <ListItemButton  onClick={()=>setOpenDrawer(false)} key={0} component={Link} to='/blogs'><ListItemText>Blogs</ListItemText></ListItemButton>
                <ListItemButton onClick={()=>setOpenDrawer(false)} key={1} component={Link} to='/projects'><ListItemText>Projects</ListItemText></ListItemButton>
            </List>
        </Drawer>
        <IconButton sx= {{color:'black',marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp