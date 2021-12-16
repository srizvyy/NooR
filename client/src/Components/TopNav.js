import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PageviewIcon from '@mui/icons-material/Pageview';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import styled from 'styled-components';


function TopNav() {
   return ( 
   <div> 
        <Box sx={{ flexGrow: 1 }}>
       
        <AppBar id="navbar-container" position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               <Link id="sooch" to='/'> Noor </Link>
            </Typography>
            <Link to='projects'><Button id="home-btn" color="inherit"><HomeIcon/></Button></Link>
            <Button color="inherit"><PageviewIcon/></Button>
            <Button color="inherit"><LogoutIcon/></Button>
            </Toolbar>
        </AppBar>
        
        </Box>
    </div>
   ) 
}

export default TopNav



