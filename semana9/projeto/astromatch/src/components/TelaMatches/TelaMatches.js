import React, { useState } from 'react'
import { Botao, ContentContainer } from '../../AppEstilo';
import { ListaContainer, MatchContainer, UserImage } from './EstiloTelaMatches';


function TelaMatches(props) {
    const lista = ["Carol", "Mari", "Luana", "Maria"]
    
    
    
    // const renderizaLista = () => {
    //     lista.map((pessoa) => {
    //         return (
    //             <div>
    //                 <li>{pessoa}</li>
    //             </div>
    //         )
    //     })
    // }
    
    return (
        <ContentContainer>
            <ListaContainer>
            {lista.map((pessoa) => {
                return (
                    <MatchContainer>
                        <li>{pessoa}</li>
                        <UserImage src='https://icons-for-free.com/iconfiles/png/512/user+icon-1320190636314922883.png'/>
                    </MatchContainer>
                )
            })}
            </ListaContainer>
            <Botao onClick={()=>props.atualizaTela("home")}>Home</Botao>
        </ContentContainer>
    )
}

export default TelaMatches;
