import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TranslatedItem } from '../models';

export function useTranslatedEnum(myEnum: { [k: number]: string }, trnsKey: string): TranslatedItem[] {
  const { t } = useTranslation();

  const translatedList = useMemo((): TranslatedItem[] => {
    return Object.keys(myEnum)
      .filter((status): boolean => !isNaN(+status))
      .map((id: string): TranslatedItem => {
        const status = myEnum[+id].toLowerCase();
        const name = t(trnsKey + '.' + status);
        return { id, name };
      });
  }, [myEnum, t, trnsKey]);

  return translatedList;
}
