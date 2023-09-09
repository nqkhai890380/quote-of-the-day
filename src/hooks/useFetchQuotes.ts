import { useState, useEffect } from 'react';
import { Quote } from 'types/Quote';

export function useFetchQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    setLoading(true);
    fetch('https://api.quotable.io/quotes/random?limit=3')
      .then((r) => r.json())
      .then((response) => {
        setLoading(false);
        const quotesFetched: Quote[] = response.map(
          (result: any) => ({
            content: result.content,
            author: result.author,
          } as Quote),
        );
        setQuotes(quotesFetched);
      });
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return {
    quotes,
    loading,
    fetchQuotes,
  };
}
