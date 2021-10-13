import react from "react";
import {useHistory} from 'react-router-dom';

function Login() {

  const history = useHistory()

  const goToHome = () => {
    history.push("/")
  }

  const goToAdminHome = () => {
    history.push("/admin/trips/list")
  }
    return (
      <div>
        <p>Página de Login</p>
        <button onClick={goToHome}>Home</button>
        <button onClick={goToAdminHome}>Fazer login</button>
      </div>
    );
  }
  
  export default Login;