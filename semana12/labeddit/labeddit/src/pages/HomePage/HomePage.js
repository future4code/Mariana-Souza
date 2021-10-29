import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin, goToPost, goToRegister } from '../../routes/coordinator';
import { PageContainer } from '../../Style';
import Card from './Card';
import { ButtonContainer } from './HomePageStyle';


function Home() {
    const history = useHistory();
    return (
        <PageContainer>
            <h3>Home</h3>
            <Card />
            <Card />
            <ButtonContainer>
                <button onClick={() => goToPost(history, 1)}>Ver post</button>
                <button onClick={() => goToLogin(history)}>Login</button>
            </ButtonContainer>
        </PageContainer>
    );
}

export default Home;