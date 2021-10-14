import react from "react";
import {useHistory} from 'react-router-dom';
import { Botao, Button } from "../../Style";
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
        <Button onClick={goToLogin}>Área administrativa</Button>
        <Button onClick={goToListTrip}>Viagens</Button>
      </div>
    );
  }
  
  export default HomePage;