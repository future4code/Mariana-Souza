import React from 'react';
import { useHistory } from 'react-router';
import { goToHome } from '../../routes/coordinator';


function Register() {

    const history = useHistory();
  return (
    <div>
      <h3>Register</h3>
      <button onClick={()=>goToHome(history)}>Fazer cadastro</button>
    </div>
  );
}

export default Register;