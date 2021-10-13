import react from "react";
import {useHistory} from 'react-router-dom';
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
        <button onClick={goToLogin}>Área administrativa</button>
        <button onClick={goToListTrip}>Viagens</button>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
  export default HomePage;