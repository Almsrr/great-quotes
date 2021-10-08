import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          All Quotes
        </Route>
        <Route path="/quotes/new-quote">New Quote</Route>
        <Route path="/quotes/:quoteId">Quote Details</Route>
      </Switch>
    </div>
  );
}

export default App;
