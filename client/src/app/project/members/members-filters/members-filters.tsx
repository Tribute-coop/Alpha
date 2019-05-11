import React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { useSearchQuery } from '../../../shared/hooks';
import { SearchSelect } from '../../../shared';

export function MembersFilters(props: RouteComponentProps): JSX.Element {
  const { location, history } = props;
  const { t } = useTranslation();

  const { updateQuery, query } = useSearchQuery(
    location.search,
    history
  );

  return (
    <div className="row py-3">
      <div className="col-12 col-lg-4">
        <SearchSelect name="role" onChange={updateQuery} value={query.role}
          label={t('project.members.role')}>
          <option value="">{t('select.all')}</option>
          <option value="0">{t('project.members.filters.owner')}</option>
          <option value="1">{t('project.members.filters.contributor')}</option>
        </SearchSelect>
      </div>
    </div>
  );
}
