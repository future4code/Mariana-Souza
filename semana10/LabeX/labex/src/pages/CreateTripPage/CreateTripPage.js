import { useHistory } from "react-router";
import { Button, ButtonContainer, InputsContainer, Input, Select } from "../../Style";

function CreateTripPage() {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <p>Cadastre uma viagem</p>

            <InputsContainer>
                <label>Nome</label>
                <Input />
            </InputsContainer>

            <InputsContainer>
                <label>Escolha um planeta</label>
                <Select>
                    <option>item1</option>
                    <option>item2</option>
                    <option>item3</option>
                    <option>item4</option>
                </Select>
            </InputsContainer>  

            <InputsContainer>
                <label>Data</label>
                <Input type="date"/>
            </InputsContainer>

            <InputsContainer>
                <label>Descrição</label>
                <Input type="text"/>
            </InputsContainer>

            <InputsContainer>
                <label>Duração em dias</label>
                <Input type="number"/>
            </InputsContainer>

            <ButtonContainer>
                <Button>Enviar</Button>
                <Button onClick={goBack}>Voltar</Button>
            </ButtonContainer>
        </div>
    );
}

export default CreateTripPage;