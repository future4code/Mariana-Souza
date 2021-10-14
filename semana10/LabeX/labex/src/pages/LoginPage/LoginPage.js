import react from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "../../Style";
import { ButtonContainer, Input, InputsContainer, LoginContainer } from "./LoginPageStyle";

function Login() {

  const history = useHistory()

  const goToHome = () => {
    history.push("/")
  }

  const goToAdminHome = () => {
    history.push("/admin/trips/list")
  }
  return (
    <LoginContainer>
      <p>Faça login para acessar a área restrita do site</p>
      <InputsContainer>
      <label>E-mail</label>
      <Input />
      </InputsContainer>
      <InputsContainer>
      <label>Senha</label>
      <Input />
      </InputsContainer>
      <ButtonContainer>
        <Button onClick={goToAdminHome}>Fazer login</Button>
        <Button onClick={goToHome}>Home</Button>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default Login;