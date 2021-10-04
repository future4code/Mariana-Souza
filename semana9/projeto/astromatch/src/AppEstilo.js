import styled from "styled-components"

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.div`
    width: 40vw;
    height: 100vh;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
`

export const Botao = styled.button`
    background-color: black;
    padding: 0.5rem 1rem;
    border: none;
    color: white;
    margin-top: 0.5rem;

    :hover{
        cursor: pointer;
        font-weight: bold;
    }
`