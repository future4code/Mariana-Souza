import React from 'react';
import Cadastro from './components/cadastroUsuario'
import Home from './components/home'
import ListaUsuario from './components/listaUsuarios';
import './App.css';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`


class App extends React.Component {

  state = {
    pagina: "cadastro"
  }
  
  onClickCadastro = () => {
    this.setState({pagina: "cadastro"});
  }
  onClickLista = () => {
    this.setState({pagina: "lista"});
  }

  onClickVoltar = () => {
    console.log("voltar");
    this.setState({pagina: ""});
  }


  render(){
    
        // {if(this.state.pagina === ""){
        //   return (
        //     <PageContainer>
        //       <Home 
        //       onClickCadastro={this.onClickCadastro}
        //       onClickLista={this.onClickLista}
        //       />
        //     </PageContainer>
        //   );
        {if(this.state.pagina === "cadastro"){
          return (
            <PageContainer>
              <Cadastro 
                onClickCadastro={this.onClickCadastro}
                onClickLista={this.onClickLista} 
                // onClickVoltar={this.onClickVoltar}
              
              />
            </PageContainer>
          );
        }
        else if(this.state.pagina === "lista"){
          return (
            <PageContainer>
              <ListaUsuario
                onClickCadastro={this.onClickCadastro}
                onClickLista={this.onClickLista} 
                // onClickVoltar={this.onClickVoltar}
              />
            </PageContainer>
          );
        }
        }
       
        
     
    
  }
}

export default App;