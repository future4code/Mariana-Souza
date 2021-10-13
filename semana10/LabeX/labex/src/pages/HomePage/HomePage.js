import react from "react";
import {useHistory} from 'react-router-dom';
import { Botao } from "../../Style";
function HomePage() {
    const history = useHistory()

    const goToLogin = () => {
        history.push("/login")
    }

    const goToListTrip = () => {
        history.push("/trips/list")
    }


    const goBack = () => {
        history.goBack()
    }

    return (
      <div>
        <p>Home</p>
        <Botao onClick={goToLogin}>Área administrativa</Botao>
        <Botao onClick={goToListTrip}>Viagens</Botao>
        <Botao onClick={goBack}>Voltar</Botao>
      </div>
    );
  }
  
  export default HomePage;