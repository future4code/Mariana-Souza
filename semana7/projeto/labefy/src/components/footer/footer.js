import React from "react";

import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #1f4e45;
    height: 7vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
`
const Texto = styled.p`
    color: white;
`

class Footer extends React.Component{
    render(){
        return(
            <FooterContainer>
                <Texto>Acompanhe nossas redes sociais</Texto>
            </FooterContainer>
    
        );
    }
    
}

export default Footer;