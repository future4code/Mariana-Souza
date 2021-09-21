import React from 'react'
import '../App.css';


    

function Cadastro(props){
    return(
        
        <div className="cadastroContainer" >
            <p>Preencha os dados abaixo</p>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input name="nome"/>
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input name="email"/>
            </div>
            <button className="cadastro">Cadastrar</button>
            <button className="lista" onClick={props.onClickLista}>Listar usuários</button>
            {/* <button className="voltar" onClick={props.onClickVoltar}>Voltar</button> */}
            
        </div>
    );
}

export default Cadastro;