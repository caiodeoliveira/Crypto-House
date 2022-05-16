import Login from "./components/templates/login";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default App;
