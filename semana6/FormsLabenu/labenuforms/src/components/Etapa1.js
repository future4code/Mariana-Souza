import React from "react";

export default class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h2>Etapa 1</h2>
                <ol>
                    <li>
                        <label>Qual o seu nome?</label>
                        <input />
                    
                    </li>
                    <li>
                        <label>Qual a sua idade?</label>
                        <input />
                    
                    </li>
                    <li>
                        <label>Qual o seu email?</label>
                        <input />
                    
                    </li>
                    <li>
                        <label>Qual a sua escolaridade?</label>
                        <select name="select" >
                            <option value="medioIncompleto">Ensino médio incompleto</option>
                            <option value="medioCompleto">Ensino médio completo</option>
                            <option value="superiorIncompleto">Ensino superior incompleto</option>
                            <option value="superiorCompleto">Ensino superior completo</option>
                        </select>
                    </li>

                </ol>
            </div>
        );
    }

}


