import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://lh3.googleusercontent.com/ogw/ADea4I72nAhHoHf4zlCgnRbTyfA6ssTryRSoH98w4-RxgQ=s32-c-mo"
          nome="Carol Souza"
          descricao="Sou estudante de programação na Labenu. Aplico o que aprendo nas aulas em projetos de HTML, CSS e JavaScript. "
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://icons-for-free.com/iconfiles/png/512/email+48px-131985190190164101.png"
          titulo="E-mail:"
          dado="  carol@contato.com"
        />
        <CardPequeno
        imagem="https://icons-for-free.com/iconfiles/png/512/pin+drop+48px-131987943443821724.png"
        titulo="Endereço:"
        dado="Rua A, s/n, Santa Clara, Piacatuba - MG"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://www.ifsudestemg.edu.br/comunicacao-social/galeria-de-imagens/logos/ifsudestemg.png/@@images/4fad792b-c44e-4508-a328-1720b9a3dfbe.png"
          nome="IF Sudeste MG - Campus Juiz de Fora"
          descricao="Técnica de Help Desk"
        />

        <CardGrande
          imagem="https://lh3.googleusercontent.com/proxy/Vdvf7mAm_6q06Z9WvMl4McK84t4V5IYRcuFW95X8iA07dlL59t31CdNzfHeHCL5uLHNla4XLiaWik6ePBRPkrM2wwmP29WJPiw"
          nome="Cesama"
          descricao="Auxiliar administrativa"
        />
      </div>

      
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
