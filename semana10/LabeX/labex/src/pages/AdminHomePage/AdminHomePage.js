import { useHistory } from "react-router";
import {Botao, Button} from '../../Style'

function AdminHomePage() {

    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }
     

    const goBack = () => {
        history.goBack()
    }

    return (
      <div>
        <p>Home Adm</p>

        <Button onClick={goBack}>Voltar</Button>
        <Button onClick={goToCreateTrip}>Criar viagem</Button>
        <Button onClick={goToHome}>Logout</Button>
      </div>
    );
  }
  
  export default AdminHomePage;