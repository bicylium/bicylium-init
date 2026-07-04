import React from 'react';
import { Outlet } from 'react-router-dom';
import Eyebrow from './Eyebrow';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const HomeLayout = () => {
  return (
    <div className="layout-wrapper">
      <Eyebrow />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
