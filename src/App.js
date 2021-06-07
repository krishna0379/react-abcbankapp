import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { Dashboard } from "./components/Dashboard";
import { LoanUpsert } from "./components/LoanUpsert";
import { LoanTypes } from "./components/LoanList";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch >
        <Route path="/dashboard" >
          <Dashboard />
        </Route>

        <Route path="/create-loan">
          <LoanUpsert />
        </Route>

        <Route path="/list-loan">
          <LoanTypes/>
        </Route>

        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
