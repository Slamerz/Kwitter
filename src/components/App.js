import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, UserProfile, Homepage } from ".";

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/profile/:id" component={UserProfile} />
    <Route exact path="/homepage" component={Homepage} />
  </Switch>
);

export default App;
