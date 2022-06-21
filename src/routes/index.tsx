// import { useEffect } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { Login } from "../components/templates/login";
import { Home } from "../components/templates/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default Routes;
