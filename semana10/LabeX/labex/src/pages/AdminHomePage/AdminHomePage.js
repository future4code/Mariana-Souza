import { useHistory } from "react-router";

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

        <button onClick={goBack}>Voltar</button>
        <button onClick={goToCreateTrip}>Criar viagem</button>
        <button onClick={goToHome}>Logout</button>
      </div>
    );
  }
  
  export default AdminHomePage;