import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ContentContainer, PageContainer } from './AppEstilo'
import TelaInicial from './components/TelaInicial/TelaInicial'
import TelaMatches from './components/TelaMatches/TelaMatches'
import Reset from './components/BotaoReset/BotaoReset'



function App() {
  const [tela, setTela] = useState("home")
  const [profile, setProfile] = useState(undefined)
  

//requisição de perfil para escolher
  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana/person')
      .then((response) => {
        setProfile(response.data.profile)
      })
      .catch(() => {
        alert("Algo deu errado. Tente novamente")
      })
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  


  





//renderização condicional
  const atualizaTela = (tela) => {
    setTela(tela)
  }

  const renderizaTela = () => {

    switch (tela) {
      case "home":
        return <TelaInicial
          atualizaTela={atualizaTela}
          user={profile}
          getProfileToChoose={getProfileToChoose}
        />
      case "match":
        return <TelaMatches
          atualizaTela={atualizaTela}
        />

    }
  }


  return (
    <>
      <PageContainer>
      {renderizaTela()}
      

      </PageContainer>
      <Reset />
    </>
  )


}

export default App;
