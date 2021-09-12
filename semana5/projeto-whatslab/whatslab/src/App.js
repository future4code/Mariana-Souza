import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 100vh;
  width: 30vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #faebd7;
`

const Mensagens = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  
`
const Inputs = styled.div`
  display: grid;
  grid-template-columns: 20% auto 10%;
  column-gap: .5em;
  padding: 0 0.5em;
`
const CaixaInput = styled.input `
  outline: none;
  border: none;
  border-radius: 0.5em;
  height: 2rem;
  padding: 0.2em;
  font-size: 1.2em;
`
const Botao = styled.button `
  background-color: transparent;
  border: none;
`

const BalaoMensagemEu = styled.div `
  background-color: #DDF7C8;
  margin: .5em;
  padding: .5em 1em;
  border-radius: .5em;
  align-self: flex-end;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  max-width: 60%;
  min-width: 8%;
  min-height: 1.4em;
  word-wrap: break-word;
`

const BalaoMensagemOutro = styled.div `
  background-color: #fff;
  margin: .5em;
  padding: 0 1em;
  border-radius: .5em;
  align-self: flex-start;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  max-width: 60%;
  min-width: 8%;
  word-wrap: break-word;
`

const ImagemBotao = styled.img`
  width: 60%;

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
            const nome = mensagem.usuario.toLowerCase()
           
            if(nome === 'eu'){
              return <BalaoMensagemEu>
                <p key={index}>
                  {mensagem.mensagem}
                </p>
                </BalaoMensagemEu>
            }
            else{
              return <BalaoMensagemOutro>
                  <p key={index}><strong>{mensagem.usuario}</strong></p>
                  <p key={index}>{mensagem.mensagem}</p>
                </BalaoMensagemOutro>
            }
          })

          }


        </Mensagens>
        <Inputs>
          <CaixaInput
            onChange={this.onChangeValorUsuario}
            value={this.state.valorUsuario}
            placeholder={'usuário'}
          />
          <CaixaInput
            onChange={this.onChangeValorMensagem}
            value={this.state.valorMensagem}
            placeholder={'mensagem'}
          />
          <Botao onClick={this.enviaMensagem}>
            <ImagemBotao src="https://image.flaticon.com/icons/png/512/786/786205.png"/>
          </Botao>
        </Inputs>
      </PageContainer>
    );
  }
}

export default App;

