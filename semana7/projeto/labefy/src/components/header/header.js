import React from "react";

import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #1f4e45;
    height: 6vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
`
const Texto = styled.p`
    color: white;
`

const Icone = styled.img`
    width: 1.6rem;
    margin-left: 2rem;
`

class Header extends React.Component{
    render(){
        return(
            <HeaderContainer>
                <Icone src="https://icons-for-free.com/iconfiles/png/512/multimedia+music+note+player+icon-1320184212530362701.png"/>
                <Texto>Labefy</Texto>
                <div></div>
            </HeaderContainer>
    
        );
    }
    
}

export default Header;