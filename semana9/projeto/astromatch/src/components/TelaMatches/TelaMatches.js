import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Botao, ContentContainer } from '../../AppEstilo';
import { ListaContainer, MatchContainer, UserImage } from './EstiloTelaMatches';


function TelaMatches(props) {

    const [matches, setMatches] = useState([])


    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana/matches')
            .then((response) => {
                // console.log("matches", response.data.matches)
                setMatches(response.data.matches)
            })
            .catch(() => {
                alert("Algo deu errado. Tente novamente")
            })
    }
    
    
    useEffect(() => {
        getMatches()
    }, [])

    return (
        <ContentContainer>
            <ListaContainer>
                {matches.map((match) => {
                    return (
                        <MatchContainer>
                            <li>{match.name}</li>
                            <UserImage src={match.photo} />
                        </MatchContainer>
                    )
                })}
            </ListaContainer>
            <Botao onClick={() => props.atualizaTela("home")}>Home</Botao>
        </ContentContainer>
    )
}

export default TelaMatches;
