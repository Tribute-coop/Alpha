import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from 'app/shared/utils/filters';
import { dateSeparator } from 'app/shared/utils/constants';
import { State } from '../../shared/models/state.model';
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
  const [tokensState, setTokensState] = useState<State<TokenOperation>>({
    loaded: false,
    data: []
  });

  useEffect((): void => {
    setTokensState({
      loaded: true,
      data: mockTokenOperations
    });
  }, []);

  useEffect((): void => {
    if (!tokensState.loaded) {
      return;
    }

    const search = queryString.parse(props.location.search);
    const filteredTokensOperations = applyQueryFilters<TokenOperation>(
      mockTokenOperations,
      search,
      filters
    );

    setTokensState((prevTokensState): State<TokenOperation> => {
      return {
        ...prevTokensState,
        data: filteredTokensOperations
      };
    });


  }, [props.location.search, tokensState.loaded]);

  return (
    <div className="container-fluid">
      <div className="row">
        { tokensState.loaded && (
          <div className="col-12 col-lg-9">
            <TokensSummary />
            <TokensFilters {...props } />
            <TokensList tokens={tokensState.data} />
          </div>
        )}
      </div>
    </div>
  );
}
