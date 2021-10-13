import { useHistory } from "react-router";



function TripDetailsPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>Detalhes viagem aqui</p>
            <button onClick={goBack}>Voltar</button>
        </div>
    );
}

export default TripDetailsPage;