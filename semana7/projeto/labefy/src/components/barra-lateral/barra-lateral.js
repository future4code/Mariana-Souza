import React from "react";
import styled from "styled-components";

const BarraContainer = styled.footer`
    background-color: #4d7973;
    height: 85vh;
    width: 24vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 7vh;
    color: white;
`
const Texto = styled.p`
    color: white;
`

class Barra extends React.Component{
    render(){
        return(
            <BarraContainer>
                <ul>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                    <li>Musica</li>
                </ul>
            </BarraContainer>
    
        );
    }
    
}

export default Barra;