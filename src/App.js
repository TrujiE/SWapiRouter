import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import {People} from "./views/people";
import {Planets} from "./views/planets";
import {Vehicles} from "./views/vehicles";
import {Nav} from "./Components/nav";

export function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/people">
         <People />
        </Route>
        <Route exact path="/planets">
         <Planets />
        </Route>
        <Route exact path="/vehicles">
         <Vehicles />
        </Route>                
        <Route exact path="/">
          <Home />
        </Route>
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </Router>
  );
}
