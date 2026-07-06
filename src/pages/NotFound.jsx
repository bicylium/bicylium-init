import React from 'react';
import { useTranslation } from 'react-i18next';
import './NotFound.css';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="not-found-page">
      <div className="container">
        <h1>404</h1>
        <h2>{t('notFound.title')}</h2>
        <p>{t('notFound.desc')}</p>
        <a href="/" className="btn btn-primary">{t('notFound.home')}</a>
      </div>
    </div>
  );
};

export default NotFound;
