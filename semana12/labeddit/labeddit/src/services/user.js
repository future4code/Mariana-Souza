import axios from 'axios';
import { BASE_URL } from "../constants/urls";
import { goToHome } from '../routes/coordinator';

export const login = (body, clear, history, setRightButton) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            clear()
            goToHome(history)
            setRightButton("Logout")
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
}

export const signUp = (body, clear, history, setRightButton) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((reponse) => {
            localStorage.setItem("token", reponse.data.token)
            clear()
            goToHome(history)
            setRightButton("Logout")
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}