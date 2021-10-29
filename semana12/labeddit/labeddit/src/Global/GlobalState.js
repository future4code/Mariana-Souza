import { React, useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios';
// import { BASE_URL } from "../constants/url";


const GlobalState = (props) => {

    const states = { }
    const setters = { }
    const requests = { }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
