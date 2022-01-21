import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";

import HomePage from "../pages/HomePage/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";

const Router = () => {
    return (
        <BrowserRouter>
            

                <Header/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>

                    <Route exact path="/detalhe/:id" element={<MovieDetailPage/>} />

                    <Route element={<div>erro</div>}/>
                </Routes>

           
        </BrowserRouter>
    );
}

export default Router;