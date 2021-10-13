import {useHistory} from 'react-router-dom';

function ListTripsPage() {
    const history = useHistory()

    const goToAppForm = () => {
        history.push("/trips/application")
    }


    const goBack = () => {
        history.goBack()
    }

    return (
      <div>
        <p>Lista de viagens</p>
        <button onClick={goToAppForm}>Increva-se</button>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
  export default ListTripsPage;