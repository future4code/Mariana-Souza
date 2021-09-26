import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Barra from './components/barra-lateral/barra-lateral';
import Main from './components/pages/home';


const PageContainer = styled.div`
  width: 100vh;
`

class App extends React.Component{
  state={
    paginaAtual: "home"
  }
  
  mostraPagina = (pagina) =>{
    this.setState({paginaAtual: pagina});
  }
  
  render(){
    return (
      <PageContainer>
        <Header />
        <Barra 
          mostraPagina={this.mostraPagina}
        />
        <Main 
          paginaAtual={this.state.paginaAtual}
        />
        <Footer/>
      </PageContainer>
    );
  }
}

export default App;
