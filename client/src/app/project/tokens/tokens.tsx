import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from 'app/shared/utils/filters';
import { dateSeparator } from 'app/shared/utils/constants';
import { toShortDate } from 'app/shared/utils/helpers';
import { TokensSummary } from './tokens-summary';
import { TokensFilters } from './tokens-filters';
import { TokensList } from './tokens-list';
import { TokenOperation } from './token.model';

import { tokenOperations as mockTokenOperations } from 'app/mocks';

const filters: QueryFilters<TokenOperation> = {
  operation: (token: TokenOperation, operation: string): boolean =>
    token.operation === +operation
  ,
  by: (token: TokenOperation, userId: string): boolean =>
    token.creator.id === userId
  ,
  dateRange: (token: TokenOperation, dateRange: string): boolean => {
    const [from, to] = dateRange.split(dateSeparator);
    const createdAt = toShortDate(token.createdAt);

    return from <= createdAt && createdAt <= to;
  }
};

export function Tokens(props: RouteComponentProps): JSX.Element {
  const [tokens, setTokens] = useState<TokenOperation[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect((): void => {
    setTokens(mockTokenOperations);
    setLoaded(true);
  }, []);

  useEffect((): void => {
    if (!loaded) {
      return;
    }

    const search = queryString.parse(props.location.search);
    const filteredMembers = applyQueryFilters<TokenOperation>(
      mockTokenOperations,
      search,
      filters
    );

    setTokens(filteredMembers);
  }, [loaded, props.location.search]);

  return (
    <div className="container-fluid">
      <div className="row">
        { loaded && (
          <div className="col-12 col-lg-9">
            <TokensSummary />
            <TokensFilters {...props } />
            <TokensList tokens={tokens} />
          </div>
        )}
      </div>
    </div>
  );
}
