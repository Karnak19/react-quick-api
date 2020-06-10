import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import User from "./views/User";
import Layout from "./Layout";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users/:id" component={User} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
