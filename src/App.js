import "./App.css";
import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./styles/logIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
