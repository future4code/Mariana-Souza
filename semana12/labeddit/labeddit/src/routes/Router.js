import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/HomePage/HomePage';
import Login from '../pages/LoginPage/LoginPage';
import Post from '../pages/PostPage/PostPage';
import Register from '../pages/RegisterPage/RegisterPage';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route exact path={"/login"}>
                    <Login />
                </Route>

                <Route exact path={"/register"}>
                    <Register />
                </Route>

                <Route exact path={"/post/:id"}>
                    <Post />
                </Route>

                <Route>
                    <Home />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router;