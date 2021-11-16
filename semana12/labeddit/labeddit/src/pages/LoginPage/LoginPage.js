import React from "react";
import { SignUpContainer } from "./LoginPageStyle";
import { PageContainer } from "../../Style";
import { useForm } from "../../hooks/useForm";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goToRegister } from "../../routes/coordinator";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


export default function LoginPage({setRightButton}) {
    useUnprotectedPage()
    
    

    const history = useHistory();
    return (
        <PageContainer>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color={'primary'}
            >
                Faça login para acessar o site
            </Typography>
            <LoginForm 
                setRightButton={setRightButton}
            />
            <SignUpContainer>
                <Typography
                    variant="p"
                    component="div"
                    sx={{ flexGrow: 1 }}
                    color={'primary'}

                >
                    Não possui uma conta? Acesse o formulário e cadastre-se!
                </Typography>
                <Button
                    fullWidth
                    color="primary"
                    variant={"outlined"}
                    size={"medium"}
                    onClick={() => goToRegister(history)}
                >
                    Fazer cadastro
                </Button>
            </SignUpContainer>
        </PageContainer>
    )
}