import React from "react";
import styled from "styled-components";
import Cadastro from "./cadastrar-playlist";
import Lista from "./lista-playlists";

const PlaylistContainer = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid black; */
    position: absolute;
    top: 10vh;
`


class Playlist extends React.Component{
    
    
    


    render(){

        

        return(
            <PlaylistContainer>
                <p>Detalhe</p>
                <button onClick={()=>this.props.atualizaPagina("lista")}>Voltar</button>
            </PlaylistContainer>
    
        );
    }
    
}

export default Playlist;