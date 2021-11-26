import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"
 
const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography color="white" sx={{flexGrow:1}}>Student Menagement App</Typography>
                    <Button variant="text" color="inherit" as={Link} to="/" sx={{textDecoration:"none"}}>Home</Button>
                    <Button variant="text" color="inherit" as={Link} to="/add"  sx={{textDecoration:"none"}}>Added</Button>
                    <Button variant="text" color="inherit" as={Link} to="/show"  sx={{textDecoration:"none"}}>Show</Button>
                    <Button variant="text" color="inherit" as={Link} to="/delete"  sx={{textDecoration:"none"}}>Delete</Button>
                    <Button variant="text" color="inherit" as={Link} to="/search"  sx={{textDecoration:"none"}}>Search</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
