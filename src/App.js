///Routing of web site
import React from "react";
import "./App.css";
import People from "./components/people";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Person from "./components/person";
import NotFount from "./components/notfound";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/people" component={People} />
          <Route path="/person/:name" component={Person} />
          <Route path="/not-found" component={NotFount} />
          <Redirect from="/" exact to="/people" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
