import { useHistory } from "react-router";
import { Button } from "../../Style";



function TripDetailsPage() {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>Detalhes viagem aqui</p>
            <Button onClick={goBack}>Voltar</Button>
        </div>
    );
}

export default TripDetailsPage;