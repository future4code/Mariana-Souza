import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SerachPage/SearchPage";
import UserPage from "../pages/UserPage/UserPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<SearchPage/>}/>
                    

                <Route exact path={"/user"} element={<UserPage/>}/>
                    
                <Route element={<div>Erro</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;