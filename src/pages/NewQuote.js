import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

function NewQuote() {
  const history = useHistory();
  const addQuoteHandler = (quote) => {
    console.log(quote);
    history.push("/quotes");
  };
  return (
    <section>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
}

export default NewQuote;
