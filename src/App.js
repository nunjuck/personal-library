import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Library from "./components/Library";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/category/:name" component={Library} />
        <Route path="/" component={Library} />
      </Switch>
    </Router>
  );
};

export default App;
