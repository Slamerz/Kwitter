import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, Homepage } from ".";
import ProfilePage from "./ProfilePage";

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/profile/:id" component={ProfilePage} />
    <Route exact path="/homepage" component={Homepage} />
  </Switch>
);

export default App;
