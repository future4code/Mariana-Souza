import React from "react";
import { BotaoIcones, Icones, Card, Image } from './EstiloTelaInicial';

function CardUser(props) {
    
    const onClickTrue = () => {
        props.choosePerson(props.user.id)
        // props.getProfileToChoose
    }

    return (
        <Card>
            <Image src={props.user.photo} />
            <h3>{props.user.name}</h3>
            <p>{props.user.age} anos. {props.user.bio}</p>
            <div>
                <BotaoIcones onClick={onClickTrue()}>
                    <Icones src="https://icons-for-free.com/iconfiles/png/512/check+checkbox+checkmark+confirm+success+yes+icon-1320196711226060446.png" />
                </BotaoIcones>
                <BotaoIcones onClick={props.getProfileToChoose}>
                    <Icones src="https://icons-for-free.com/iconfiles/png/512/delete+deny+no+out+sign+out+x+icon-1320196067039321214.png" />
                </BotaoIcones>
            </div>
        </Card>
    )
}
export default CardUser;