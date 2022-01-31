import React from "react";
import { goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const MovieDetailPage = () => {

    const navigate = useNavigate()
    return (
        <div>
            Detalhes do filme
            <button onClick={()=>goToHome(navigate)}>home</button>
        </div>
    );
}

export default MovieDetailPage;