import React from "react";
import styled from "styled-components";
import Cadastro from "./cadastrar-playlist";
import Lista from "./lista-playlists";
import Playlist from "./detalhe-playlist"

const MainContainer = styled.div`
    background-color: #4d7973;
    height: 85vh;
    width: 75vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 7vh;
    left: 25vw;
    color: white;
`
const Home = styled.div`
    display: flex;
`

class Main extends React.Component{
    
    
    


    render(){

        const mostraPagina = () => {
            if (this.props.paginaAtual === "home"){
                return (
                    <Home>
                        <p>Bem vindo ao Labefy</p>
                    </Home>
                );
            }else if (this.props.paginaAtual === "criaPlaylist"){
                return <Cadastro />
            }else if (this.props.paginaAtual === "listaPlaylist"){
                return <Lista />
            }
            

        }

        return(
            <MainContainer>
                
                {mostraPagina()}
                
            </MainContainer>
    
        );
    }
    
}

export default Main;