import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { useSearchQuery } from '../../../../shared/hooks';
import { SearchSelect } from '../../../../shared';
import { Assignment } from '../assignment.model';
import { Member } from '../../../members/member.model';

export interface SelectOptions {
  key: string;
  value: string;
}

// OPTIMIZE & REDUCE uniq functions
function uniqAssignmentsDomains(assignments: Assignment[]): SelectOptions[] {
  return assignments
    .filter((assignment, index, self): boolean => self.findIndex((a): boolean => a.domain === assignment.domain) === index)
    .map(({ domain }: Assignment): SelectOptions => ({ key: domain, value: domain }));
}

function uniqAssignmentsMembers(assignments: Assignment[]): SelectOptions[] {
  return assignments
    .reduce((arr: Member[], { assignedTo }: Assignment): Member[] => arr.concat(assignedTo), [])
    .filter((member, index, self): boolean => self.findIndex((m): boolean => m.id === member.id) === index)
    .map(({ id, name }: Member): SelectOptions => ({ key: id, value: name }));
}

export function AssignmentsFilters(props: RouteComponentProps & { assignments: Assignment[] }): JSX.Element {
  const [domains, setDomain] = useState<SelectOptions[]>([]);
  const [who, setWho] = useState<SelectOptions[]>([]);
  const { assignments, location, history } = props;
  const { t } = useTranslation();

  const { updateQuery, query } = useSearchQuery(
    location.search,
    history
  );

  useEffect((): void => {
    setDomain(uniqAssignmentsDomains(assignments));
    setWho(uniqAssignmentsMembers(assignments));
  }, [assignments]);

  return (
    <div className="row py-3">
      <div className="col-12 col-lg-3">
        <SearchSelect name="status" onChange={updateQuery} value={query.status}
          label={t('project.contributions.assignment.status')}>
          <option value="">{t('select.all')}</option>
          <option value="0">{t('project.contributions.assignment.filters.assigned')}</option>
          <option value="1">{t('project.contributions.assignment.filters.inProgress')}</option>
        </SearchSelect>
      </div>

      { domains.length > 1 &&
        <div className="col-12 col-lg-3" >
          <SearchSelect name="domain" onChange={updateQuery} value={query.domain}
            label={t('project.contributions.assignment.domain')}>
            <option value="">{t('select.all')}</option>
            { domains.map(({ key, value }): JSX.Element =>
              <option value={key} key={key}>{value}</option>
            )}
          </SearchSelect>
        </div>
      }

      { who.length > 1 &&
        <div className="col-12 col-lg-3">
          <SearchSelect name="who" onChange={updateQuery} value={query.who}
            label={t('project.contributions.assignment.who')}>
            <option value="">{t('select.all')}</option>
            { who.map(({ key, value }): JSX.Element =>
              <option value={key} key={key}>{value}</option>
            )}
          </SearchSelect>
        </div>
      }
    </div>
  );
}