import React from "react";
import './CardPequeno.css';

function CardPequeno(props){
    return(
        <div className="littlecard-container">
            <div className="littlecard-content">
                <img src={ props.imagemEmail } />
                <h4>E-mail: </h4>
                <p>{props.email}</p>
            </div>
            <div className="littlecard-content">
                <img src={ props.imagemEndereco } />
                <h4>Endereço: </h4>
                <p>{props.endereco}</p>
            </div>
        </div>    
    )
}

export default CardPequeno;