import React from 'react'
import '../App.css';
import styled from 'styled-components';
import axios from 'axios';

const CadastroContainer = styled.div`
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
const DadosContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    font-family: 'Baloo Da 2';
    font-size: 2rem;
`
const Label = styled.label`
    align-self: flex-start;
`

const Input = styled.input`
    width: 100%;
    height: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
`
const ButtonCadastrar = styled.button`
    font-family: 'Baloo Da 2';
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    color: white;
    background: #06beb6;
    background: -webkit-linear-gradient(to right, #27828e, #06beb6);
    background: linear-gradient(to right, #11434a, #27828e);
    :hover {
        cursor: pointer;
        background: #072b30;
        background: -webkit-linear-gradient(to right, #072b30, #27828e);
        background: linear-gradient(to right, #072b30, #27828e);
    }
`

const ButtonListar = styled.button`
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
  

class Cadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }


    leNome = (event) => {
        this.setState({nome: event.target.value});
    }

    leEmail = (event) => {
        this.setState({email: event.target.value});
    }

    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
       
        axios.post(url, body, {
            headers:{
                Authorization: "mariana-souza-maryam"
            }
        })
        .then((response) => {
            alert("Usuário cadastrado com sucesso!");
            this.setState({nome: "", email: ""})
        })
        .catch((error) => {
            alert(error.response.data.message);
        })

    }

    render () {
        return (

            <CadastroContainer>
                <Paragrafo>Preencha os dados abaixo</Paragrafo>
                <DadosContainer>
                    <Label htmlFor="nome">Nome:</Label>
                    <Input 
                        name="nome" 
                        value={this.state.nome}
                        onChange={this.leNome}
                    />
                </DadosContainer>
                <DadosContainer>
                    <Label htmlFor="email">E-mail:</Label>
                    <Input 
                        name="email" 
                        value={this.state.email}
                        onChange={this.leEmail}
                    />
                </DadosContainer>
                <ButtonCadastrar onClick={this.createUser}>Cadastrar</ButtonCadastrar>
                <ButtonListar onClick={this.props.onClickLista}>Listar usuários</ButtonListar>
                {/* <button className="voltar" onClick={props.onClickVoltar}>Voltar</button> */}
    
            </CadastroContainer>
        );
    }
    
}

export default Cadastro;