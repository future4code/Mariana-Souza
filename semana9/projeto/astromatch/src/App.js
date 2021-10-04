import './App.css'
import React, {useState} from 'react'
import { ContentContainer, PageContainer } from './AppEstilo'
import TelaInicial from './components/TelaInicial/TelaInicial'
import TelaMatches from './components/TelaMatches/TelaMatches'


function App () {
  const [tela, setTela] = useState("home")
  
  const atualizaTela = (tela) => {
    setTela(tela)
  }
  
  const renderizaTela = () => {
    
    switch(tela){
      case "home":
        return <TelaInicial atualizaTela={atualizaTela}/>  
      case "match":
        return <TelaMatches atualizaTela={atualizaTela}/>
        
    }
  }
  

    return (
      <PageContainer>
        {renderizaTela()}
        
      </PageContainer>
    )

  
}

export default App;
