import React from "react";
import styled from "styled-components";

const CadastroContainer = styled.div`
    height: 40%;
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
    height: 50%;
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
    width: 40%;
    height: 1.5rem;
    font-size: 1.5rem;
    border: none;
    outline: none;
   
`

const Button = styled.button`
    width: 20%;
    height: 2rem;
    font-size: 1.2rem;
    background-color: #1f4e45;
    border: none;
    color: white;
    :hover{
        cursor: pointer;
        font-size: 1.3rem;
    }
`


class Cadastro extends React.Component{
    render(){
        return(
            <CadastroContainer>
                <Titulo>Crie uma nova playlist</Titulo>
                <InputContainer>
                    <Label htmlFor="name">Nome da nova playlist</Label>
                    <Input name="name"/>
                    <Button>Cadastrar</Button>
                </InputContainer>
            </CadastroContainer>
    
        );
    }
    
}

export default Cadastro;