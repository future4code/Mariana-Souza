import {useHistory} from 'react-router-dom';
import { Botao, Button } from '../../Style';

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
        <Button onClick={goToAppForm}>Increva-se</Button>
        <Button onClick={goBack}>Voltar</Button>
      </div>
    );
  }
  
  export default ListTripsPage;