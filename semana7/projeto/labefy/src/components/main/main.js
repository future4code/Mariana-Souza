import React from "react";
import styled from "styled-components";

const MainContainer = styled.footer`
    background-color: #4d7973;
    height: 85vh;
    width: 75vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 7vh;
    left: 25vw;
    color: white;
`


class Main extends React.Component{
    render(){
        return(
            <MainContainer>
                <ul>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                </ul>
            </MainContainer>
    
        );
    }
    
}

export default Main;