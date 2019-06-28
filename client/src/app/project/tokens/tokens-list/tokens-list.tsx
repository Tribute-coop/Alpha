import React from 'react';
import { useTranslation } from 'react-i18next';

import { RoundedImage } from 'app/shared/components';
import { smartTrim, toDecimal, toShortDate } from 'app/core/utils/helpers';
import { TokensListProps } from './tokens-list-prop';
import { TokenOperationType } from '../token.model';

export function TokensList({ tokens }: TokensListProps): JSX.Element {
  const { t } = useTranslation();

  function getKeyFromTokenOperation(operation: TokenOperationType): string {
    return TokenOperationType.hasOwnProperty(operation) ?
      TokenOperationType[operation].toLowerCase() : '';
  }

  return (
    <table className="cm-table table">
      <thead className="cm-table__head">
        <tr className="cm-table__tr">
          <th className="cm-table__th uppercase-label">{t('project.tokens.date')}</th>
          <th className="cm-table__th uppercase-label">{t('project.tokens.operation')}</th>
          <th className="cm-table__th uppercase-label text-center">{t('project.tokens.by')}</th>
          <th className="cm-table__th uppercase-label text-right">{t('project.tokens.amount')}</th>
          <th className="cm-table__th uppercase-label">{t('project.tokens.tx')}</th>
        </tr>
      </thead>
      <tbody className="cm-table__body">
        { tokens.length === 0
          ? (<tr>
            <td className="text-center" colSpan={7}>
              {t('generic.no_matches_found')}
            </td>
          </tr>)
          : tokens.map((token): JSX.Element => (
            <tr className="cm-table__tr" key={token.id}>
              <td className="cm-table__td">{toShortDate(token.createdAt)}</td>
              <td className="cm-table__td text-uppercase">
                {t(`project.tokens.filters.${getKeyFromTokenOperation(token.operation)}`)}
              </td>
              <td className="cm-table__td">
                <span className="mr-3">
                  <RoundedImage src={token.creator.thumbnail} alt={token.creator.name} />
                </span>
                {token.creator.id}
              </td>
              <td className={'cm-table__td text-right ' + (token.amount < 0 ? 'text-danger' : 'text-success')}>
                <b>{toDecimal(token.amount)}<span className="ml-1">{token.units}</span></b>
              </td>
              <td className="cm-table__td">{smartTrim(token.id)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}


