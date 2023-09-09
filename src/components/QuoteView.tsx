import { useFetchQuotes } from 'hooks/useFetchQuotes';
import React, { useState } from 'react';
import { QuoteContent } from './QuoteContent';

interface QuoteViewProps {}

const QuoteView: React.FC<QuoteViewProps> = () => {
  const [index, setIndex] = useState(0);
  const { loading, quotes } = useFetchQuotes();

  function handleNextQuote() {
    setIndex((index + 1) % 3);
  }

  return (
    <div>
      {loading && quotes[index] ? <div>Loading...</div> : <QuoteContent quote={quotes[index]} />}
      <button onClick={() => handleNextQuote()} type="button">
        Next
      </button>
    </div>
  );
};

export { QuoteView };
