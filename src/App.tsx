import Login from "./components/templates/login";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./services/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
        <Login />
      </Provider>
    </div>
  );
}

export default App;
