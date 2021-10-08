import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  {
    id: "q1",
    text: "She's wild, but never easy, cool, but full of fire",
    author: "Jonny OX",
  },
  {
    id: "q2",
    text: "I Knew I really love her, when I miss her, and she was still in my arms",
    author: "Atticus",
  },
  {
    id: "q3",
    text: "Everything mortal has moments inmortal",
    author: "Amy Lowell",
  },
];

function Quotes() {
  return (
    <section>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
}

export default Quotes;
