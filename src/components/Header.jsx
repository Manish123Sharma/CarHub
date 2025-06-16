import React from 'react'
import {AppBar, Box, Toolbar, Typography} from '@mui/material'
import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <Typography>
                        <Box component="img" src={logo} alt="CarHub Logo" sx={{ height: 50 }} />
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
