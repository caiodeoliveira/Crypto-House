import { Route, BrowserRouter } from "react-router-dom";
import Login from "../components/templates/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
    </BrowserRouter>
  );
};

export default Routes;
