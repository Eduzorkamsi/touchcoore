import "./App.css";
import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./styles/logIn";
import DashBoard from "./pages/dashBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashBoard">
            <DashBoard />
          </Route>
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
