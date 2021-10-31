import React from "react";
import { PageContainer } from "../../Style";
import RegisterForm from "./RegisterPageForm";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function Register({setRightButton}) {
    useUnprotectedPage()
    const history = useHistory();
    return(
        <PageContainer>
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color={'primary'}
            >
                Cadatre-se para ter acesso ao site
            </Typography>
            <RegisterForm 
                setRightButton={setRightButton}
            />
        </PageContainer>
    )
}