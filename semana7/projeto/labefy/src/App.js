import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Barra from './components/barra-lateral/barra-lateral';
import Main from './components/main/main';


const PageContainer = styled.div`
  width: 100vh;
`

class App extends React.Component{
  render(){
    return (
      <PageContainer>
        <Header />
        <Barra />
        <Main />
        <Footer/>
      </PageContainer>
    );
  }
}

export default App;
