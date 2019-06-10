import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { SelectableFilters } from '../../../core/models/selectable-filters.model';
import { toSelectables } from '../../../core/utils/helpers';
import { useSearchQuery } from '../../../shared/hooks';
import { SearchSelect } from '../../../shared';
import { getTokenOperations } from '../token.model';
import { Member } from '../../members/member.model';

import { members as mockMembers } from '../../mocks';

export function TokenFilters(props: RouteComponentProps): JSX.Element {
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
      <div className="col-12 col-lg-6 d-flex align-items-center">
        <h6 className="mb-3">{t('project.tokens.operations')}</h6>
      </div>

      { Object.keys(filters).map((filterName: string): JSX.Element => (
        <div className="col-12 col-lg-3" key={filterName}>
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


