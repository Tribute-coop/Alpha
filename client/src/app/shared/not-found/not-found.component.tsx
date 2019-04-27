import React from 'react';

import { useTranslation } from 'react-i18next';

export function NotFoundComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-left">
      <h1 className="display-4">Oops!</h1>
      <p className="lead">
        {t('notFound.somethingWentWrong')}
      </p>
    </div>
  );
}