import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppNavBar } from "./common/AppNavBar";
import { Dashboard } from "./components/Dashboard";
import { LoanUpsert } from "./components/LoanUpsert";
import { LoanTypes } from "./components/LoanList";
import { CustomerList } from "./components/CustomerList";

function App() {
  return (
    <div>
      <Router>
        <AppNavBar />

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/create-loan">
            <LoanUpsert />
          </Route>

          <Route path="/list-loan">
            <LoanTypes />
          </Route>

          <Route path="/customer-list">
            <CustomerList />
          </Route>

          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
