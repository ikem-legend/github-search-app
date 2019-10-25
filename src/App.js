import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Search from "./layouts/Search";
import SingleSearchResult from "./layouts/SingleSearchResult";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Search}></Route>
        <Route path="/user/:id" component={SingleSearchResult}></Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
