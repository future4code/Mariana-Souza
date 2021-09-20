import React from "react";

export default class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h2>Etapa 3</h2>
                <label>Porque você não terminou um curso superior?</label>
                <input />
                <label>Você fez algum curso complementar?</label>
                <select>
                    <option value="tecnico">Curso técnico</option>
                    <option value="ingles">Curso de inglês</option>
                    <option value="nenhum" selected>Não fiz curso complementar</option>
                </select>
            </div>
        );
    }

}


