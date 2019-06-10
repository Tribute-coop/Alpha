import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useTranslation } from 'react-i18next';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from '../../core/utils/filters';
import { TokenFilters } from './token-filters';
import { TokensList } from './tokens-list';
import { TokenOperation } from './token.model';

import { tokens as mockTokens } from '../mocks';
import { CurrencyColumn } from '../shared/currency-column/currency-column';
import { Currency } from '../../core/models/currency.enum';

const filters: QueryFilters<TokenOperation> = {
  operation: (token: TokenOperation, operation: string): boolean =>
    token.operation === +operation
  ,
  by: (token: TokenOperation, userId: string): boolean =>
    token.creator.id === userId
};

export function Tokens(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const [tokens, setTokens] = useState<TokenOperation[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect((): void => {
    setTokens(mockTokens);
    setLoaded(true);
  }, []);

  useEffect((): void => {
    if (!loaded) {
      return;
    }

    const search = queryString.parse(props.location.search);
    const filteredMembers = applyQueryFilters<TokenOperation>(
      mockTokens,
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
            <TokenFilters {...props } />
            <TokensList tokens={tokens} />
          </div>
        )}
      </div>
    </div>
  );
}
