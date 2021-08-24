import "./App.css";
import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./pages/logIn";
import DashBoard from "./pages/dashBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/login">
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
