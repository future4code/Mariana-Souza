import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 100vh;
  width: 50vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const Mensagens = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
`
const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`
class App extends React.Component {
  state = {
    mensagens: [],
    valorUsuario: "",
    valorMensagem: ""
  }

  onChangeValorUsuario = (event) => {
    this.setState({ valorUsuario: event.target.value });
  }

  onChangeValorMensagem = (event) => {
    this.setState({ valorMensagem: event.target.value });
  }

  enviaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorUsuario,
      mensagem: this.state.valorMensagem
    }
    console.log(novaMensagem);

    const arrayNovaMensagem = [
      novaMensagem, ...this.state.mensagens
    ]

    this.setState({mensagens: arrayNovaMensagem, valorUsuario: "", valorMensagem: "" })
  }

  render() {
    
    return (
      <PageContainer>
        <Mensagens>
          {this.state.mensagens.map((mensagem, index) => {
            return <p key={index}>
              <strong>{mensagem.usuario}</strong>: {mensagem.mensagem}
            </p>
          })

          }


        </Mensagens>
        <Inputs>
          <input
            onChange={this.onChangeValorUsuario}
            value={this.state.valorUsuario}
            placeholder={'usuário'}
          />
          <input
            onChange={this.onChangeValorMensagem}
            value={this.state.valorMensagem}
            placeholder={'mensagem'}
          />
          <button onClick={this.enviaMensagem}>Enviar</button>
        </Inputs>
      </PageContainer>
    );
  }
}

export default App;

