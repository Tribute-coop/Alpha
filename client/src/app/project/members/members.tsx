import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from '../../core/utils/filters';
import { RoundedImage } from '../../shared';
import { MembersFilters } from './members-filters';

import { members as mockMembers } from '../mocks';
import { Member } from './member.model';

function contains(text: string, searchString: string): boolean {
  return text.toLowerCase().includes(searchString);
}

const filters: QueryFilters<Member> = {
  q: (member: Member, q: string): boolean =>
    contains(member.id, q) ||
    contains(member.name, q)
  ,
  role: (member: Member, role: string): boolean =>
    member.role === +role
};

export function Members(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const [members, setMembers] = useState<Member[]>([]);

  useEffect((): void => {
    const search = queryString.parse(props.location.search);
    const filteredMembers = applyQueryFilters<Member>(
      mockMembers,
      search,
      filters
    );

    setMembers(filteredMembers);
  }, [props.location.search]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-9">

          <MembersFilters {...props } />

          <table className="cm-table table">
            <thead className="cm-table__head">
              <tr className="cm-table__tr">
                <th className="cm-table__th uppercase-label"></th>
                <th className="cm-table__th uppercase-label">{t('project.members.member')}</th>
                <th className="cm-table__th uppercase-label">{t('project.members.name')}</th>
                <th className="cm-table__th uppercase-label">{t('project.members.role')}</th>
                <th className="cm-table__th uppercase-label">{t('project.members.lastSeen')}</th>
                <th className="cm-table__th uppercase-label">{t('project.members.jobs')}</th>
                <th className="cm-table__th uppercase-label">{t('project.members.rewards')}</th>
              </tr>
            </thead>
            <tbody className="cm-table__body">
              { members.length === 0
                ? (<tr>
                  <td className="text-center" colSpan={7}>
                    {t('generic.no_matches_found')}
                  </td>
                </tr>)
                : members.map((member): JSX.Element => (
                  <tr className="cm-table__tr" key={member.id}>
                    <td className="cm-table__td">
                      <RoundedImage src={member.thumbnail} alt={member.name} />
                    </td>
                    <td className="cm-table__td">{member.id}</td>
                    <td className="cm-table__td">{member.name}</td>
                    <td className="cm-table__td">{member.role}</td>
                    <td className="cm-table__td">{member.lastSeen}</td>
                    <td className="cm-table__td">{member.jobs}</td>
                    <td className="cm-table__td">{member.rewards}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
