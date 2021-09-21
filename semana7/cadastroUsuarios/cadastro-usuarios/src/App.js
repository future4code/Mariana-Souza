import React from 'react';
import Cadastro from './components/cadastroUsuario'
import Home from './components/home'
import ListaUsuario from './components/listaUsuarios';
import './App.css';




class App extends React.Component {

  state = {
    pagina: "cadastro"
  }
  
  onClickCadastro = () => {
    console.log("cadastro")
    this.setState({pagina: "cadastro"});
  }
  onClickLista = () => {
    console.log("lista");
    this.setState({pagina: "lista"});
  }

  onClickVoltar = () => {
    console.log("voltar");
    this.setState({pagina: ""});
  }


  render(){
    
        // {if(this.state.pagina === ""){
        //   return (
        //     <div className="pageContainer">
        //       <Home 
        //       onClickCadastro={this.onClickCadastro}
        //       onClickLista={this.onClickLista}
        //       />
        //     </div>
        //   );
        {if(this.state.pagina === "cadastro"){
          return (
            <div className="pageContainer">
              <Cadastro 
                onClickCadastro={this.onClickCadastro}
                onClickLista={this.onClickLista} 
                // onClickVoltar={this.onClickVoltar}
              
              />
            </div>
          );
        }
        else if(this.state.pagina === "lista"){
          return (
            <div className="pageContainer">
              <ListaUsuario
                onClickCadastro={this.onClickCadastro}
                onClickLista={this.onClickLista} 
                // onClickVoltar={this.onClickVoltar}
              />
            </div>
          );
        }
        }
       
        
     
    
  }
}

export default App;