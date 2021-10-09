import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";

function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") history.push("/quotes");
  }, [status, history]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };
  return (
    <section>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </section>
  );
}

export default NewQuote;
