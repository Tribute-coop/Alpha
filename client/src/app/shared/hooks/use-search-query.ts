import { useState, ChangeEvent, useCallback, useEffect } from 'react';
import { History, Search } from 'history';
import queryString from 'query-string';

type AnyHTMLElement = HTMLSelectElement | HTMLInputElement;

interface NonNullableParsedQuery { [key: string]: string | undefined }

interface SearchQueryState {
  query: NonNullableParsedQuery;
  updateQuery: (event: ChangeEvent<AnyHTMLElement>) => void;
}

export function useSearchQuery(initialQuery: Search, history: History): SearchQueryState {
  const parsedQuery = queryString.parse(initialQuery) as NonNullableParsedQuery;
  const [query, setQuery] = useState(parsedQuery);

  const updateQuery = useCallback((event: ChangeEvent<AnyHTMLElement>): void => {
    const { name, value } = event.target;

    setQuery((prevQuery): NonNullableParsedQuery =>
      ({
        ...prevQuery,
        ...{
          [name]: value ?
            value : undefined
        }
      })
    );
  }, []);

  useEffect((): void =>
    history.push({ search: queryString.stringify(query) }),
  [history, query]);

  return { query, updateQuery };
}