import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { toSelectable } from 'app/shared/utils/helpers';
import { SearchSelect, SearchInput } from 'app/shared/components';
import { useSearchQuery, useTranslatedEnum } from 'app/shared/hooks';
import { SelectableFilters, TranslatedItem } from 'app/shared/models';
import { Domain } from '../domain.model';
import { Member } from '../../../members/member.model';
import { AssignmentStatus } from '../assignment-status.enum';

import {
  domains as mockDomains,
  members as mockMembers
} from 'app/mocks';

const assignmentsFilterTrnskey = 'project.contributions.assignment.filters';

export function AssignmentsFilters({ location, history }: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { updateQuery, query } = useSearchQuery(location.search, history);
  const assignmentsStatus = useTranslatedEnum(AssignmentStatus, assignmentsFilterTrnskey);

  const [ filters, setFilters ] = useState<SelectableFilters>({
    who: [],
    status: [],
    domain: []
  });

  useEffect((): void => {
    const selectableMembers = toSelectable<Member>(mockMembers, 'id', 'name');
    const selectableDomains = toSelectable<Domain>(mockDomains, 'name', 'name');
    const selectableStatus = toSelectable<TranslatedItem>(assignmentsStatus, 'id', 'name');

    setFilters({
      status: selectableStatus,
      domain: selectableDomains,
      who: selectableMembers
    });
  }, [assignmentsStatus]);

  return (
    <div className="row pt-3">
      { Object.keys(filters).map((filterName: string): JSX.Element => (
        <div className="col-12 col-xl-3" key={filterName}>
          <SearchSelect name={filterName} onChange={updateQuery} value={query[filterName]}
            label={t(`project.contributions.assignment.${filterName}`)}>
            <option value="">{t('select.all')}</option>
            { filters[filterName].map(({ key, value }): JSX.Element =>
              <option value={key} key={key}>{value}</option>
            )}
          </SearchSelect>
        </div>
      ))}

      <div className="col-12 col-xl-3">
        <SearchInput name="q" onChange={updateQuery} value={query.q} />
      </div>
    </div>
  );
}