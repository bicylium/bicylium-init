import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const PAGE_EYEBROWS = {
    '/hakkinda': t('layout.eyebrowAbout'),
    '/is-birligi': t('layout.eyebrowCollaboration'),
  };

  const eyebrowText = PAGE_EYEBROWS[pathname] || null;

  return (
    <div className="layout-wrapper">
      {eyebrowText && (
        <div className="page-eyebrow">
          <span>{eyebrowText}</span>
        </div>
      )}
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
