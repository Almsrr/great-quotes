import { useParams } from "react-router-dom";

function QuoteDetails() {
  const params = useParams();
  return (
    <section>
      <h1>Quote Details</h1>
      <p>ID: {params.quoteId}</p>
    </section>
  );
}

export default QuoteDetails;
