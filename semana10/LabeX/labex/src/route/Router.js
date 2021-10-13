import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/LoginPage/LoginPage';
import AppFormPage from '../pages/ApplicationFormPage/ApplicationFormPage';
import HomePage from '../pages/HomePage/HomePage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage';
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/trips/application"}>
          <AppFormPage />
        </Route>

        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/admin/trips/"}>
          <TripDetailsPage />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default Router;