import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { useSearchQuery } from 'app/shared/hooks';
import { SearchSelect } from 'app/shared/components';
import { SelectableFilters } from 'app/shared/models';
import { dateSeparator } from 'app/shared/utils/constants';
import { toSelectables } from 'app/shared/utils/helpers';
import { SearchDateInput } from '../shared';
import { getTokenOperations } from '../token.model';
import { Member } from '../../members/member.model';

import { members as mockMembers } from 'app/mocks';

export function TokensFilters(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { location: { search }, history } = props;
  const [ filters, setFilters ] = useState<SelectableFilters>({ by: [], operation: [] });
  const { updateQuery, query } = useSearchQuery(search, history);

  useEffect((): void => {
    const operations = getTokenOperations();
    const selectableMembers = toSelectables<Member>(mockMembers, 'id', 'name');
    const selectableOperations = toSelectables<any>(operations, 'id', 'name', true);

    setFilters({
      by: selectableMembers,
      operation: selectableOperations
    });
  }, []);

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
            { filters[filterName].map(({ key, value, requireI18n }): JSX.Element =>
              <option value={key} key={key}>{ requireI18n ? t(value) : value}</option>
            )}
          </SearchSelect>
        </div>
      ))}
    </div>
  );
}


