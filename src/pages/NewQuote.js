import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
  const addQuoteHandler = (quote) => {
    console.log(quote);
  };
  return (
    <section>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
}

export default NewQuote;
