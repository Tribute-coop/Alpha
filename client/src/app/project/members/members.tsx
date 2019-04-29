import React from 'react';
import { useTranslation } from 'react-i18next';

import { Member } from './member.model';

import './members.scss';

const members: Member[] = [
  { id: '@zunith', name: 'Zuna G.', role: 'Owner', jobs: 8, lastSeen: 'Today', rewards: '1,200 CTX', thumbnail: 'https://picsum.photos/id/1084/50/50' },
  { id: '@Aleez87', name: 'Ali Muzammal', role: 'Contributor', jobs: 12, lastSeen: 'This week', rewards: '800 CTX', thumbnail: 'https://picsum.photos/id/40/50/50' },
  { id: '@Armanik98', name: 'Armand L.', role: 'Contributor', jobs: 1, lastSeen: 'This week', rewards: '250 CTX', thumbnail: 'https://picsum.photos/id/100/50/50' },
  { id: '@AnnCapistrano', name: 'Ann Capistrano', role: 'Contributor', jobs: 3, lastSeen: '1 month ago', rewards: '270 CTX', thumbnail: 'https://picsum.photos/id/1/50/50' }
];

export function Members(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="mt-5">
      <table className="cm-table table">
        <thead>
          <tr className="cm-table__tr">
            <th className="cm-table__th"></th>
            <th className="cm-table__th">{t('project.members.member')}</th>
            <th className="cm-table__th">{t('project.members.name')}</th>
            <th className="cm-table__th">{t('project.members.role')}</th>
            <th className="cm-table__th">{t('project.members.lastSeen')}</th>
            <th className="cm-table__th">{t('project.members.jobs')}</th>
            <th className="cm-table__th">{t('project.members.rewards')}</th>
          </tr>
        </thead>
        <tbody className="cm-table__body">
          { members.map((member): JSX.Element => (
            <tr className="cm-table__tr" key={member.id}>
              <td className="cm-table__td">
                <img src={member.thumbnail} alt={member.name} className="user-thumb user-thumb--border rounded-circle"/>
              </td>
              <td className="cm-table__td">{member.id}</td>
              <td className="cm-table__td">{member.name}</td>
              <td className="cm-table__td">{member.role}</td>
              <td className="cm-table__td">{member.lastSeen}</td>
              <td className="cm-table__td">{member.jobs}</td>
              <td className="cm-table__td">{member.rewards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
