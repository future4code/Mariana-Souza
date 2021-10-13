import { useHistory } from "react-router";
import {Botao} from '../../Style'

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

        <Botao onClick={goBack}>Voltar</Botao>
        <Botao onClick={goToCreateTrip}>Criar viagem</Botao>
        <Botao onClick={goToHome}>Logout</Botao>
      </div>
    );
  }
  
  export default AdminHomePage;