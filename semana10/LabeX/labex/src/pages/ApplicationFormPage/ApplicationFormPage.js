import { useHistory } from "react-router";
import { Button, Input, InputsContainer, Select } from "../../Style";
import { ButtonContainer } from "../LoginPage/LoginPageStyle";

function AppFormPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <p>Inscreva-se para a viagem dos sonhos</p>
      <InputsContainer>
        <label>Escolha uma viagem</label>
        <Select>
          <option>item1</option>
          <option>item2</option>
          <option>item3</option>
          <option>item4</option>
        </Select>
      </InputsContainer>

      <InputsContainer>
        <label>Nome</label>
        <Input />
      </InputsContainer>

      <InputsContainer>
        <label>Idade</label>
        <Input />
      </InputsContainer>

      <InputsContainer>
        <label>Profissão</label>
        <Input />
      </InputsContainer>

      <InputsContainer>
        <label>Sobre você</label>
        <Input />
      </InputsContainer>

      <InputsContainer>
        <label>Escolha uma viagem</label>
        <Select>
          <option>item1</option>
          <option>item2</option>
          <option>item3</option>
          <option>item4</option>
        </Select>
      </InputsContainer>

      <ButtonContainer>
        <Button>Enviar</Button>
        <Button onClick={goBack}>Voltar</Button>
      </ButtonContainer>
    </div>
  );
}

export default AppFormPage;
