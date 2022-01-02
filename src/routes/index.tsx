import { Route, BrowserRouter } from "react-router-dom";
import Login from "../components/templates/login";

import React from "react";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default Routes;
