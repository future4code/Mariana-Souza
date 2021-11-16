import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/HomePage/HomePage';
import Login from '../pages/LoginPage/LoginPage';
import Post from '../pages/PostPage/PostPage';
import Register from '../pages/RegisterPage/RegisterPage';



function Router({setRightButton}) {
    return (
        
            
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>

                <Route exact path={"/login"}>
                    <Login 
                        setRightButton={setRightButton}
                    />
                </Route>

                <Route exact path={"/register"}>
                    <Register 
                        setRightButton={setRightButton}
                    />
                </Route>

                <Route exact path={"/post/:id"}>
                    <Post />
                </Route>

                <Route>
                    <Home />
                </Route>

            </Switch>
        
    )
}
export default Router;