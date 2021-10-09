import styled from "styled-components"


export const ListaContainer = styled.div`
    width: 100%;
    height: 80%;
    border: 1px solid black;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
`

export const MatchContainer = styled.div`
    border: 1px solid black;
    width: 80%;
    /* height: rem; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    margin: 0.9rem;
    li{
        list-style: none;
    }
    :hover{
        background-color: rgba(0,0,0,0.2);
    }
`

export const UserImage=styled.img`
    width: 50px;
`