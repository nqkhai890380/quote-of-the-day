import React from 'react';
import { Quote } from 'types/Quote';

interface QuoteContentProps {
  quote: Quote;
}

const QuoteContent: React.FC<QuoteContentProps> = ({ quote }) => (
  <div>
    <p className="content">{quote && quote.content}</p>
    <p>
      <span className="author">
        &mdash;
        {quote.author}
      </span>
    </p>
  </div>
);

export { QuoteContent };
