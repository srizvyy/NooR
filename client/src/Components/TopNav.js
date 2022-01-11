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


function TopNav({handleLogout, user}) {
   return ( 
      <> 
        <Box sx={{ flexGrow: 1 }}>
            <AppBar id="navbar-container" position="static">
               <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link id="sooch" to='/'> NooR </Link>
               </Typography>
              {user.id ? <Link to='projects'><Button id="home-btn" color="inherit"><HomeIcon/></Button></Link> : null}
               {/* <Button color="inherit"><PageviewIcon/></Button> */}
               {user.username ? <Button color="inherit">Welcome {user.username}<LogoutIcon onClick={handleLogout}/></Button> : null}
               </Toolbar>
         </AppBar>
        </Box>
      </>
   ) 
}
        

export default TopNav



