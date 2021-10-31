import React from "react";
import { InputContainer } from "../../Style";
import { useForm } from "../../hooks/useForm";
import { TextField} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { signUp } from "../../services/user";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



export default function RegisterForm({setRightButton}) {
    const [form, onchange, clear] = useForm({ username: "", email: "", password: "" })

    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButton)
    }
    return (
            
            <InputContainer>
                <form onSubmit={onSubmitForm}>


                    <TextField
                        type={"text"}
                        name={"username"}
                        value={form.username}
                        onChange={onchange}
                        label={"Nome de usuário"}
                        fullWidth
                        // variant={'filled'}
                        margin={"normal"}
                        required
                    />

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
                        Cadastrar
                    </Button>
                </form>
            </InputContainer>
    )
}