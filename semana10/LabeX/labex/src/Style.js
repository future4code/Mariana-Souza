import React from "react";
import styled from "styled-components";

export const MainContainer = styled.main`
    height: 90vh;
    width: 100vw;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #c5d2ec;
    margin: 1rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    width: fit-content;
    :hover{
        cursor: pointer;
        font-weight: 500;
    }
`

export const Botao = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #c5d2ec;
    margin: 1rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    :hover{
        cursor: pointer;
        
    }
`