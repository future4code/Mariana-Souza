import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin, goToPost, goToRegister } from '../../routes/coordinator';


function Home() {
    const history = useHistory();
    return (
        <div>
            <h3>Home</h3>
            <button onClick={() => goToPost(history, 1)}>Ver post</button>
            <button onClick={() => goToLogin(history)}>Login</button>
            <button onClick={() => goToRegister(history)}>Fazer cadastro</button>
        </div>
    );
}

export default Home;