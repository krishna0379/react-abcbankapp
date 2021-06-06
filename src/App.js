import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { LoanTypes } from "./components/LoanTypes";
import { Dashboard } from "./components/Dashboard";
import { CreateLoanType } from "./components/CreateLoanType";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/create-loan-type">
          <CreateLoanType />
        </Route>

        <Route path="/list-loan-types">
          <LoanTypes />
        </Route>

        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
