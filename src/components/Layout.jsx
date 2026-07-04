import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const PAGE_EYEBROWS = {
  '/hakkinda': 'Bisiklet kültürünün dayanışma ekonomisi',
  '/is-birligi': 'Dijital ekosistemin merkeziyetsiz iş ortağı olun',
};

const Layout = () => {
  const { pathname } = useLocation();
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
