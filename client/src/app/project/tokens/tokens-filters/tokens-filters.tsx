import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';


import { SearchSelect } from 'app/shared/components';
import { toSelectable } from 'app/shared/utils/helpers';
import { dateSeparator } from 'app/shared/utils/constants';
import { useSearchQuery, useTranslatedEnum } from 'app/shared/hooks';
import { SelectableFilters, TranslatedItem } from 'app/shared/models';
import { SearchDateInput } from '../shared';
import { Member } from '../../members/member.model';
import { TokenOperationType } from '../token.model';

import { members as mockMembers } from 'app/mocks';

const tokensFilterTrnskey = 'project.tokens.filters';

export function TokensFilters(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { location: { search }, history } = props;
  const [ filters, setFilters ] = useState<SelectableFilters>({ by: [], operation: [] });
  const { updateQuery, query } = useSearchQuery(search, history);
  const operations = useTranslatedEnum(TokenOperationType, tokensFilterTrnskey);

  useEffect((): void => {
    const selectableMembers = toSelectable<Member>(mockMembers, 'id', 'name');
    const selectableOperations = toSelectable<TranslatedItem>(operations, 'id', 'name');

    setFilters({
      by: selectableMembers,
      operation: selectableOperations
    });
  }, [operations]);

  return (
    <div className="row py-3">
      <div className="col-12 col-xl-2 d-flex align-items-center">
        <h6 className="mb-3">{t('project.tokens.operations')}</h6>
      </div>

      <div className="col-12 col-xl-4">
        <SearchDateInput name='dateRange' onChange={updateQuery} value={query.dateRange}
          label={t('project.tokens.dateRange')} separator={dateSeparator} />
      </div>

      { Object.keys(filters).map((filterName: string): JSX.Element => (
        <div className="col-12 col-xl-3" key={filterName}>
          <SearchSelect name={filterName} onChange={updateQuery} value={query[filterName]}
            label={t(`project.tokens.${filterName}`)}>
            <option value="">{t('select.all')}</option>
            { filters[filterName].map(({ key, value }): JSX.Element =>
              <option value={key} key={key}>{value}</option>
            )}
          </SearchSelect>
        </div>
      ))}
    </div>
  );
}


