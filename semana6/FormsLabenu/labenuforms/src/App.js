import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";





export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch(this.state.etapa){
        case 1:
          return <Etapa1 />;
        
        case 2:
          return <Etapa2 />;
        
        case 3:
          return <Etapa3 />;
        
        case 4:
          return <Final />;
        
    }
  }

  irProximaEtapa = () => {
    const proximaEtapa = this.state.etapa +1;
    this.setState({etapa: proximaEtapa});
  }

  mostraBotao = () =>{
    if(this.state.etapa < 4){
      return (
      <button onClick={this.irProximaEtapa}>Próxima etapa</button>
      )
    }
  }
  render() {
    return (
      <div>
        
        {this.renderizaEtapa()}
        {this.mostraBotao()}
        
      </div>
    );
  }

}


