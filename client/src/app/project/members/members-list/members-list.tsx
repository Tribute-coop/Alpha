import React from 'react';
import { useTranslation } from 'react-i18next';

import { RoundedImage } from '../../../shared/components';
import { MembersListProps } from './members-list-prop';

export function MembersList({ members }: MembersListProps): JSX.Element {
  const { t } = useTranslation();

  return (
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
  );
}
