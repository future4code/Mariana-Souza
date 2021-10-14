import React from "react";
import styled from "styled-components";

export const MainContainer = styled.main`
    height: 90vh;
    width: 100vw;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        text-align: center;
    }
`

// export const ContentContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     /* align-items: center; */
//     border: 1px solid black;
//     height: 70%;
//     padding: 2rem;

//     p{
//         margin-bottom: 2rem;
//         font-size: 1.2rem;
//     }
// `


export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: #c5d2ec;
    margin: 1rem;
    padding: 0.8rem 2rem;
    font-size: 1.2rem;
    width: fit-content;
    :hover{
        cursor: pointer;
        font-weight: 500;
    }
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


export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem;
`

export const Select = styled.select`
    outline: none;
    font-size: 1.2rem;
`
// export const Option = styled.Option`
// font-size: 1.2rem;
// `