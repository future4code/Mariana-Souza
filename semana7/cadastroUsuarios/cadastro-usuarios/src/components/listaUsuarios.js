import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';

const ListaContainer = styled.div`
    width: 40%;
    height: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`

const Paragrafo = styled.p`
    font-family: 'Baloo Da 2';
    font-size: 1.5rem;
    margin-bottom: 3rem;
`

const CardUsuario= styled.div`
    border: 1px solid black;
    margin: 0.5rem;
    padding: 0.8rem;
    width: 60%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
`

const Icone = styled.img`
    width: 1rem;
`
const ButtonDelete = styled.button`
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
    }
`
const ButtonCadastro = styled.button`
    font-family: 'Baloo Da 2';
    padding: 0.1rem 0.4rem;
    margin-top: 1rem;
    border-radius: 3px;
    border: none;
    color: white;
    background: #06beb6;
    background: -webkit-linear-gradient(to right, #27828e, #06beb6);
    background: linear-gradient(to right, #11434a, #27828e);
    :hover{
        cursor: pointer;
        background: #072b30;
        background: -webkit-linear-gradient(to right, #072b30, #27828e);
        background: linear-gradient(to right, #072b30, #27828e);
    }
`

class ListaUsuario extends React.Component {

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


        axios.get(url, {
            headers: {
                Authorization: "mariana-souza-maryam"
            }
        })
            .then((response) => {
                this.setState({ usuarios: response.data })
            })
            .catch(() => {
                alert("Ocoreu um problema, tente novamente.")
            })
    }


    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

        axios.delete(url, {
            headers: {
                Authorization: "mariana-souza-maryam"
            }
        })
            .then(() => {
                alert("Usuário deletado com sucesso.")
                this.getAllUsers()
            })
            .catch((error) => {
                alert("Ocorreu um problema, tente novamente.")
            })
        
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((usuario) => {
            return (
                <CardUsuario key={usuario.id}>
                    {usuario.name}
                    <ButtonDelete onClick={() => this.deleteUser(usuario.id)}><Icone src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" alt="delete" /></ButtonDelete>
                </CardUsuario>
            )
        })
        return (
            <ListaContainer>
                <Paragrafo>Lista de Usuarios</Paragrafo>
                {listaUsuarios}
                {/* <button className="voltar" onClick={props.onClickVoltar}>Voltar</button> */}
                <ButtonCadastro onClick={this.props.onClickCadastro}>Cadastrar usuários</ButtonCadastro>
            </ListaContainer>
        );
    }
}

export default ListaUsuario;