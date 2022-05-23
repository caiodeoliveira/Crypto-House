import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./services/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
