import React from "react";
import styled from "styled-components";
import Playlist from "./detalhe-playlist";
import NovaMusica from "./nova-musica";

const PageContainer = styled.div`
    height: 60%;
    width: 50%;
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


const ListaContainer = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 80%;
`
const Item = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    
`

const Playlists = styled.button`
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    color: white;
    :hover{
        cursor: pointer;
        font-weight: bold;

    }
`
    

const Icone = styled.img`
    width: 25px;
`

const Button = styled.button`
    border: none;
    background-color: transparent;


    :hover{
        cursor: pointer;
        
    }
`


class Lista extends React.Component{
    
    state={
        lista: [
            "MPB",
            "Rock 80",
            "Funk",
            "Para estudar",
            "Dia de faxina",
            "Relaxar",
            "Lofi",
            "Noite da pizza"    
        ],
        pagina: "lista"
    }
    
    atualizaPagina = (pagina) => {
        this.setState({pagina: pagina});
    }
    render(){

        const mostraPagina = () =>{
            if (this.state.pagina === "lista"){
                return (
                    <ListaContainer>
                        <Titulo>Minhas playlists</Titulo>
                            {this.state.lista.map((playlist) => {
                                return (
                                    <Item>
                                        <Playlists onClick={() => this.atualizaPagina("detalhe")}>{playlist}</Playlists>
                                        <Button>
                                            <Icone src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" />
                                        </Button>
                                    </Item>
                                );
                            }) 
                        }
                    </ListaContainer>
                );
            }else if(this.state.pagina==="detalhe"){
                return <Playlist 
                            atualizaPagina={this.atualizaPagina}
                        />
            }else if(this.state.pagina==="adicionarmusica"){
                return <NovaMusica 
                            atualizaPagina={this.atualizaPagina}
                        />
            }
        }


        return(
        
            <PageContainer>
                
                    {mostraPagina()}
            </PageContainer>
    
        );
    }
    
}

export default Lista;