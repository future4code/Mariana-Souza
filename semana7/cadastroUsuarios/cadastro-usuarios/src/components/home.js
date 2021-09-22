import React from 'react';
import '../App.css';
import Cadastro from './cadastroUsuario'
import ListaUsuario from './listaUsuarios'
import styled from 'styled-components'


function Home(props){
    return(
        <div>
            <p>Bem vindo ao Labenuser</p>
            <button onClick={props.onClickCadastro}>Cadastrar usuários</button>
            <button onClick={props.onClickLista}>Listar usuários</button>
            
        </div>
    );
}

export default Home;
