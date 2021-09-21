import React from 'react'
import '../App.css';

function ListaUsuario(props){
    return(
        <div className="listaContainer">
            <p>Lista de Usuarios</p>
            {/* <button className="voltar" onClick={props.onClickVoltar}>Voltar</button> */}
            <button className="cadastro" onClick={props.onClickCadastro}>Cadastrar usuários</button>
        </div>
    );
}

export default ListaUsuario;