import React from "react";
import styled from "styled-components";

const BarraContainer = styled.footer`
    background-color: #4d7973;
    height: 85vh;
    width: 24vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    top: 7vh;
    color: white;
    
`


const Button = styled.button`
    border: none;
    background-color: transparent;
    margin: 2vh 8vh;
    font-size: 1.5rem;
    color: white;
    :hover{
        cursor: pointer;
        font-weight: bold;
    }
    
`

class Barra extends React.Component{
    render(){
        return(
            <BarraContainer>
                
                    <Button onClick={() => this.props.mostraPagina("criaPlaylist")}>Nova Playlist</Button>
                    <Button onClick={() => this.props.mostraPagina("listaPlaylist")}>Minhas Playlists</Button>
                    <Button>Buscar</Button>
                    
                
            </BarraContainer>
    
        );
    }
    
}

export default Barra;