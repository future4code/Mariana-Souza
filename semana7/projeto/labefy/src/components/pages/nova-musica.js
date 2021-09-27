import React from "react";
import styled from "styled-components";
import Cadastro from "./cadastrar-playlist";
import Lista from "./lista-playlists";

const MusicaContainer = styled.div`
    height: 120%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
    position: absolute;
    top: 10vh;
`

const Titulo = styled.p`
    margin-top: 0.8rem;
    font-size: 1.5rem;
`
const InputContainer = styled.div`
    width: 60vw;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
`
const Label = styled.label`
    font-size: 1.2rem;
`

const Input = styled.input`
    width: 50%;
    outline: none;
`
class NovaMusica extends React.Component{
    
    
    


    render(){

        

        return(
            <MusicaContainer>
                <Titulo>Nova Musica</Titulo>
                
                <InputContainer>
                    <Label>Nome da música</Label>
                    <Input />
                    <Label>Artista</Label>
                    <Input />
                    <Label>URL</Label>
                    <Input />
                    <button onClick={()=>this.props.atualizaPagina("adicionarmusica")}>Adicionar nova música</button>
                <button onClick={()=>this.props.atualizaPagina("lista")}>Voltar</button>
                </InputContainer>
                
                
            </MusicaContainer>
    
        );
    }
    
}

export default NovaMusica;