import React from "react";
import { InputContainer } from "../../Style";
import { useForm } from "../../hooks/useForm";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { login } from "../../services/user";
import { useHistory } from "react-router-dom";

export default function LoginForm({setRightButton}) {
    const [form, onchange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButton)
    }

    
    return (
            <InputContainer>
                <form onSubmit={onSubmitForm}>


                    <TextField
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onchange}

                        label={"E-mail"}
                        fullWidth
                        // variant={'filled'}
                        margin={"normal"}
                        required
                    />

                    <TextField
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onchange}
                        label={"Senha"}
                        fullWidth
                        // variant={'filled'}
                        margin={"normal"}
                        required
                    />

                    <Button
                        fullWidth
                        color="primary"
                        variant={"outlined"}
                        size={"large"}
                        type={"submit"}
                    >
                        Fazer Login
                    </Button>
                </form>
            </InputContainer>
            
    )
}