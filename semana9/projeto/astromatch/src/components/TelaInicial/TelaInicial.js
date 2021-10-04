import React, { useState } from 'react'
import { Container } from '../TelaMatches/EstiloTelaMatches';
import { ContentContainer, Botao } from '../../AppEstilo';
import { BotaoIcones, Icones, UserContainer } from './EstiloTelaInicial';


function TelaInicial(props) {
    return (

            <ContentContainer>
                <UserContainer>
                    <img src='https://picsum.photos/350/'/>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque hendrerit blandit. Maecenas vitae iaculis lacus.</p>
                    <div>
                        <BotaoIcones>
                            <Icones src="https://icons-for-free.com/iconfiles/png/512/check+checkbox+checkmark+confirm+success+yes+icon-1320196711226060446.png"/>
                        </BotaoIcones>
                        <BotaoIcones>
                            <Icones src="https://icons-for-free.com/iconfiles/png/512/delete+deny+no+out+sign+out+x+icon-1320196067039321214.png"/>
                        </BotaoIcones>
                    </div>
                </UserContainer>
                <Botao onClick={()=>props.atualizaTela("match")}>Ver Matches</Botao>
            </ContentContainer>
            
    )
}

export default TelaInicial;