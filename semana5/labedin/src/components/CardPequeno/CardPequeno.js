import React from "react";
import './CardPequeno.css';

function CardPequeno(props){
    return(
        <div className="littlecard-container">
            <div className="littlecard-content">
                <img src={ props.imagem } />
                <h4>{props.titulo} </h4>
                <p>{props.dado}</p>
            </div>
            
        </div>    
    )
}

export default CardPequeno;