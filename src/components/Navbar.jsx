import React, { useContext } from "react";

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { ThemeContext } from "../context/ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";



const Navbar = () => {

    const { mode, toggleTheme } = useContext(ThemeContext)

    return (

        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">Crypto Dashboard</Typography>
                <IconButton onClick={toggleTheme} color="inherit">
                    {mode === 'light' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>

    )

}


export default Navbar
