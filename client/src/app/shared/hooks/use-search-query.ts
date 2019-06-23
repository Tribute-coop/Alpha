import { useState, ChangeEvent, useCallback, useEffect, useRef } from 'react';
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
  const [query, setQuery] = useState<NonNullableParsedQuery>(parsedQuery);
  const isFirstTime = useRef<boolean>(true);

  const updateQuery = useCallback((event: ChangeEvent<AnyHTMLElement>): void => {
    const { name, value } = event.target;

    setQuery((prevQuery): NonNullableParsedQuery => {
      if (value === prevQuery[name] || (!value && !prevQuery[name])) {
        return prevQuery;
      }

      return {
        ...prevQuery,
        ...{ [name]: value ? value : undefined }
      };
    });
  }, []);

  useEffect((): void => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    history.push({ search: queryString.stringify(query) });
  },
  [history, query]);

  return { query, updateQuery };
}