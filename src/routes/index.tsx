import { Route, BrowserRouter } from "react-router-dom";
import Home from "../components/templates/home";
import Login from "../components/templates/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/" component={Home} exact />
    </BrowserRouter>
  );
};

export default Routes;
