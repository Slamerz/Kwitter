import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, UserProfile,  } from ".";
import ProfilePic from "./ProfilePic";


const App = () => (
  <Switch>
    <Route exact path="/" render={() => <LoginForm />} />
    <Route exact path="/profile" render={() => <UserProfile />} />
    <Route exact path="/profilepic" render={() => <ProfilePic />} />

  </Switch>
);

export default App;
