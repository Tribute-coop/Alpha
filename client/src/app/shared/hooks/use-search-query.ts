import { useState, ChangeEvent, useCallback, useEffect, FormEvent } from 'react';
import { History, Search } from 'history';
import queryString from 'query-string';

type HTMLElement = HTMLSelectElement | HTMLInputElement;

interface NonNullableParsedQuery { [key: string]: string | number | string[] | undefined }

interface SearchQueryState {
  query: NonNullableParsedQuery;
  updateQuery: (event: FormEvent<HTMLElement>) => void;
}

export function useSearchQuery(initialQuery: Search, history: History): SearchQueryState {
  const parsedQuery = queryString.parse(initialQuery) as NonNullableParsedQuery;
  const [query, setQuery] = useState(parsedQuery);

  const updateQuery = useCallback((event: FormEvent<HTMLElement>): void => {
    const { name, value } = (event as ChangeEvent<HTMLElement>).target;

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