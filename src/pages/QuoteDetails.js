import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";

import Comments from "../components/comments/Comments";

function QuoteDetails() {
  const params = useParams();
  return (
    <Fragment>
      <section>
        <h1>Quote Details</h1>
        <p>ID: {params.quoteId}</p>
      </section>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetails;
