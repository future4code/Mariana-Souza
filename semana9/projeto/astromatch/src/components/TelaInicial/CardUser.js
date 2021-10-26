import React from "react";
import axios from "axios";
import { BotaoIcones, Icones, Card, Image, Title } from './EstiloTelaInicial';

function CardUser(props) {


    const onClickNo = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana/choose-person';
        const body = {
            id: props.user.id,
            choice: false
        }
        axios.post(url, body)
            .then((response) => {
                console.log("response", response.data.isMatch)
                props.getProfileToChoose()
            })
            .catch(() => {
                alert("Algo deu errado. Tente novamente")
            })
    }

    const onClickYes = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mariana/choose-person';
        const body = {
            id: props.user.id,
            choice: true
        }
        axios.post(url, body)
            .then((response) => {
                console.log("response", response.data.isMatch)
                props.getProfileToChoose()
            })
            .catch(() => {
                alert("Algo deu errado. Tente novamente")
            })
        console.log("Disse sim")
    }




    return (
        <Card>
            {
                props.user ?
                    (
                        <>
                            <Image src={props.user.photo} />
                            <Title>
                                <h3>{props.user.name}, {props.user.age}</h3>
                            </Title>
                            <p>{props.user.bio}</p>
                            <div>
                                <BotaoIcones onClick={onClickYes}>
                                    <Icones src="https://icons-for-free.com/iconfiles/png/512/check+checkbox+checkmark+confirm+success+yes+icon-1320196711226060446.png" />
                                </BotaoIcones>
                                <BotaoIcones onClick={onClickNo}>
                                    <Icones src="https://icons-for-free.com/iconfiles/png/512/delete+deny+no+out+sign+out+x+icon-1320196067039321214.png" />
                                </BotaoIcones>
                            </div>
                        </>) : <p>Carregando...</p>
            }


        </Card>
    )
}
export default CardUser;