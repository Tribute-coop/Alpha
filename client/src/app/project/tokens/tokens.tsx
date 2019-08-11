import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { applyQueryFilters } from 'app/shared/utils/filters';
import { State } from '../../shared/models/state.model';
import { TokensSummary } from './tokens-summary';
import { TokensFilters } from './tokens-filters';
import { TokensList } from './tokens-list';
import { TokenOperation } from './token.model';
import { tokenQueryFilters } from './tokens-query-filter';

import { tokenOperations as mockTokenOperations } from 'app/mocks';

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
      tokenQueryFilters
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
