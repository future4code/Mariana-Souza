import { useHistory } from "react-router";


function AppFormPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
      <div>
        <p>Inscreva-se</p>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
  export default AppFormPage;