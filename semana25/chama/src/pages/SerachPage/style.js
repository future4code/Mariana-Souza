import styled from 'styled-components'




export const ScreenContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-image: linear-gradient(to right, #03dffc, #056182);
    /* background-color: #03dffc; */
    /* opacity: 0.4; */
`

export const Title = styled.h1`
    /* font-family: "Roboto"; */
    color: #f1f1f1;
    z-index: 1;
    margin: 10rem 0rem 3rem 0rem;
`

export const Input = styled.input`
    outline: none;
    border: none;
    width: 40vw;
    height: 3rem;
    font-size: 2rem;
    border-radius: 6px;
    color: #056182;
    text-align: center;
    
`

export const Button = styled.button`
    height: 3rem;
`