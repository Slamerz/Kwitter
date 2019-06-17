import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, UserProfile, Homepage, EditProfile} from ".";

const App = () => (
  <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/profile/:id" component={UserProfile} />
    <Route exact path="/homepage" component={Homepage} />
    <Route exact path="/edit-profile" component={EditProfile} />

  
  </Switch>
);

export default App;
