import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NotQuotesFound from "../components/quotes/NoQuotesFound";

function Quotes() {
  const {
    sendRequest,
    status,
    data: allQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) return <p className="center focused">{error}</p>;

  if (status === "completed" && (!allQuotes || allQuotes.length === 0)) {
    return <NotQuotesFound />;
  }

  return (
    <section>
      <QuoteList quotes={allQuotes} />
    </section>
  );
}

export default Quotes;
