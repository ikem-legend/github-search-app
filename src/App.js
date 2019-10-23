import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Search from "./layouts/Search";
import SingleSearchResult from "./layouts/SingleSearchResult";

function App() {
  return (
    <Switch>
      <Route path="/" component={Search}></Route>
      <Route path="/results/:id" component={SingleSearchResult}></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
