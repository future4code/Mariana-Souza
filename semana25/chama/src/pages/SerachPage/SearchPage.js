
import { TextField, Box, Typography, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import useRequestData from '../../hooks/useRequestData';
import { Button, Input, ScreenContainer, Title } from './style';
import { BASE_URL } from '../../constants/url';



const SearchPage = () => {

    const [name, setName] = useState('')

    const onChange = (event) => {
        setName(event.target.value)
    }

    const getUserByName = () => {

        
        
    }

    const user = useRequestData([], `${BASE_URL}/users`)
    console.log(user)

    return (
        <ScreenContainer>
            <Title>Buscar usuário</Title>
            <div>
            <Input value={name} onChange={onChange()} />
            <IconButton onClick={getUserByName()}>
                <SearchOutlined color='white'/>
            </IconButton>
            {/* <Button>
                <img src="https://cdn.icon-icons.com/icons2/3252/PNG/512/search_square_regular_icon_204979.png"/>
            </Button> */}
            </div>

            
        </ScreenContainer>
    );
}

export default SearchPage;