import { useHistory } from "react-router";

function CreateTripPage() {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }
    
    return (
        <div>
            <p>Cadastre uma viagem</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    );
}

export default CreateTripPage;