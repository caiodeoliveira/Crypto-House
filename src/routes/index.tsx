import { Route, BrowserRouter } from "react-router-dom";
import { Login } from "../components/templates/login";

import React from "react";
import { Home } from "../components/templates/home";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
