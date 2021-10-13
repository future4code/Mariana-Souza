import { useHistory } from "react-router";
import { Botao } from "../../Style";

function CreateTripPage() {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }
    
    return (
        <div>
            <p>Cadastre uma viagem</p>
            <Botao onClick={goBack}>Voltar</Botao>
        </div>
    );
}

export default CreateTripPage;