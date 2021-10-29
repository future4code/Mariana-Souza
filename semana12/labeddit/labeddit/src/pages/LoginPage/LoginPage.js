import React from 'react';
import { useHistory } from 'react-router';
import { goToHome, goToRegister } from '../../routes/coordinator';
import { PageContainer } from '../../Style';


function Login() {
  const history = useHistory();
  return (
    <PageContainer>
      <h3>Boas vindas ao Labeddit!</h3>
      <h4>Faça login para prosseguir</h4>
      <label>E-mail</label>
      <input />
      <label>Senha</label>
      <input />
      <button onClick={()=>goToHome(history)}>Fazer login</button>
      <button onClick={()=>goToRegister(history)}>Fazer cadastro</button>
    </PageContainer>
  );
}

export default Login;