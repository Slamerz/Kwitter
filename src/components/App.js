import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, Homepage, EditProfile } from ".";
import ProfilePage from "./ProfilePage";

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/profile/:id" component={ProfilePage} />
    <Route exact path="/homepage" component={Homepage} />
    <Route path="/homepage/:filter" component={Homepage}/>
    <Route exact path="/edit-profile" component={EditProfile} />
  </Switch>
);

export default App;
