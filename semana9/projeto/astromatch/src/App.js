import './App.css'
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { ContentContainer, PageContainer } from './AppEstilo'
import TelaInicial from './components/TelaInicial/TelaInicial'
import TelaMatches from './components/TelaMatches/TelaMatches'
import prettyFormat from 'pretty-format'


function App() {
  const [tela, setTela] = useState("home")
  const [matches, setMatches] = useState([])
  const [profile, setProfile] = useState({})
  // const [getProfileToChose, setGetProfileChose] = useState(false)


  
  const getProfileToChoose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')
      .then((response) => {
        setProfile(response.data.profile)
      })
      .catch((error) => {
        console.log(error)
      })
  }

useEffect(() => {
  getProfileToChoose()
}, [])

  const atualizaTela = (tela) => {
    setTela(tela)
  }

  const renderizaTela = () => {

    switch (tela) {
      case "home":
        return <TelaInicial
          atualizaTela={atualizaTela}
          choosePerson={postChoosePerson}
          user={profile}
          getProfileToChoose={getProfileToChoose}
        />
      case "match":
        return <TelaMatches atualizaTela={atualizaTela} />

    }
  }


  const postChoosePerson = (id) => {
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person',
      {
        "id": id,
        "choice": true
      }
    )
      .then((resp) => {
        console.log(resp.data)
        verificaMatch(resp.data.isMatch, profile)
      })
      .catch((err) => {
        console.log("Erro:", err)
      })
  }


  const verificaMatch = (isMatch, profile) => {
    if(isMatch === true){
      const newMatch = profile
      setMatches(...matches, newMatch)
    }
  }


  console.log("Meus matches:", matches)
  return (
    <PageContainer>
      {renderizaTela()}

    </PageContainer>
  )


}

export default App;
