import React from 'react';
import { useHistory } from 'react-router';
import { goToHome } from '../../routes/coordinator';


function Login() {
  const history = useHistory();
  return (
    <div>
      <h3>Login</h3>
      <button onClick={()=>goToHome(history)}>Fazer login</button>
    </div>
  );
}

export default Login;