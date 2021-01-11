import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home";
import Contact from '../components/Contact'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/index" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Redirect exact from="/" to="/index" />
      <Route path="*" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
