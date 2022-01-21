import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import tmdb from "../../assets/tmdb.png"
import { ContainerLogo } from './styled';


const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary" >
                <Toolbar>
                <ContainerLogo>

                <img src={tmdb} alt="Logo" />
                </ContainerLogo>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header