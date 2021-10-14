import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    border: 1px solid black;
    height: 70%;
    padding: 2rem;

    p{
        margin-bottom: 2rem;
        font-size: 1.2rem;
    }
`


export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem;
`


export const Input = styled.input`
    outline: none;
    font-size: 1.2rem;
`