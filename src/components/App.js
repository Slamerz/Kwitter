import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, UserProfile } from ".";

const App = () => (
  <Switch>
    <Route exact path="/" render={() => <LoginForm />} />
    <Route exact path="/profile" render={() => <UserProfile />} />
  </Switch>
);

export default App;
