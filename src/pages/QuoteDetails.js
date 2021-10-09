import { useParams, Route, Link } from "react-router-dom";
import { Fragment } from "react";

import Comments from "../components/comments/Comments";
import { DUMMY_QUOTES } from "./Quotes";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

function QuoteDetails() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) return <p>Quote Not Found</p>;

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${quote.id}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetails;
