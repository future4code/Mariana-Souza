import react from "react";
import { useHistory } from 'react-router-dom';
import { Button, Input, ButtonContainer, InputsContainer  } from "../../Style";
import { LoginContainer } from "./LoginPageStyle";

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
      <Input type="email" required/>
      </InputsContainer>
      <InputsContainer>
      <label>Senha</label>
      <Input type="password" required/>
      </InputsContainer>
      <ButtonContainer>
        <Button onClick={goToAdminHome}>Fazer login</Button>
        <Button onClick={goToHome}>Home</Button>
      </ButtonContainer>
    </LoginContainer>
  );
}

export default Login;