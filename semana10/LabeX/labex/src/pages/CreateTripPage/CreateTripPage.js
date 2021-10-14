import { useHistory } from "react-router";
import { Button } from "../../Style";

function CreateTripPage() {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }
    
    return (
        <div>
            <p>Cadastre uma viagem</p>
            <Button onClick={goBack}>Voltar</Button>
        </div>
    );
}

export default CreateTripPage;