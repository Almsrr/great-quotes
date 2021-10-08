import { Route, Redirect, Switch } from "react-router-dom";

import Quotes from "./pages/Quotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/new-quote">
          <NewQuote />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
