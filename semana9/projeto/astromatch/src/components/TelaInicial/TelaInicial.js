import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { ContentContainer, Botao } from '../../AppEstilo';

import Card from './CardUser';



function TelaInicial(props) {

    return (

        <ContentContainer>

            <Card
                user={props.user}
                choosePerson={props.choosePerson}
                getProfileToChoose={props.getProfileToChoose}
                onClickNo={props.onClickNo}
                onClickYes={props.onClickYes}
            />
            <Botao onClick={() => props.atualizaTela("match")}>Ver Matches</Botao>



        </ContentContainer>

    )
}

export default TelaInicial;