import * as React from 'react';
import {useHistory} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { StyledToolbar } from './HeaderStyle';
import Button from '@material-ui/core/Button';
import { goToLogin, goToHome } from '../../routes/coordinator';


export default function Header({rightButton, setRightButton}) {
    const history = useHistory();
    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token){
            logout()
            setRightButton("Login")
            goToLogin(history)
        }else{
            goToLogin(history)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>

                    <Button variant={"outlined"} color='inherit' onClick={() => goToHome(history)}>Home</Button>
                    <Button variant={"outlined"} color='inherit' onClick={() => rightButtonAction()}>{rightButton}</Button>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}