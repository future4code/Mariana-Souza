import axios from "axios";
import React from "react";
import { Botao } from "../../AppEstilo";

function Reset() {
    
    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana/clear')
            .then((resp)=>{
                console.log(resp)
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    return(
        <div>
            <Botao onClick={onClickReset}>Resetar curtidas e matches</Botao>
        </div>
    )
}

export default Reset;