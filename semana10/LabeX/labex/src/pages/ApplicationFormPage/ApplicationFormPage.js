import { useHistory } from "react-router";
import { Button } from "../../Style";


function AppFormPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
      <div>
        <p>Inscreva-se</p>
        <Button onClick={goBack}>Voltar</Button>
      </div>
    );
  }
  
  export default AppFormPage;