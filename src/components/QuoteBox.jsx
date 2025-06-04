const QuoteBox = ({ quote }) => {
  if (!quote) return <p className="text-center">Loading...</p>;

  return (
    <div className="text-center space-y-2">
      <p className="text-xl font-semibold dark:text-white">"{quote.text}"</p>
      <p className="text-gray-500 dark:text-gray-300">- {quote.author}</p>
    </div>
  );
};

export default QuoteBox;
