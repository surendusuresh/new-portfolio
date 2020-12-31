import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/index" exact component={Home} />
      <Redirect exact from="/" to="/index" />
    </Switch>
  </BrowserRouter>
);

export default Router;
