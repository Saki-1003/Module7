import { NavLink } from "react-router-dom"
import { useState } from "react";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()
  
  const menuItems = [
    {title: 'Home', path: '/'},
    {title: 'Bitcoin', path: '/Bitcoin'}, 
    {title: 'Post List', path: '/PostList'}, 
    {title: 'Login', path: '/Login'},
  ]

  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen)
  }

  function navigateLogin() {
    navigate('./Login')
  }


  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              News
            </Typography>
            <Button color="inherit" onClick={navigateLogin}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer 
        anchor='left'
        open={drawerOpen} 
        onClose={handleDrawerToggle}>
        {menuItems.map(item => <Link style={{padding: '30px'}} key={item.title} to={item.path}>{item.title}</Link>)}
      </Drawer>
    </>
  );
}

