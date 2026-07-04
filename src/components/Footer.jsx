import React from 'react';
import logo from '../../img/Bicylium Logo.svg';
import youtubeIcon from '../../icons/youtube.svg';
import instagramIcon from '../../icons/Instagram.svg';
import './Layout.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logo} alt="Bicylium Logo" className="footer-logo-img" />
            <div className="footer-socials">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="footer-social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <a href="/hakkinda">Hakkında</a>
            <a href="/is-birligi">İş Birliği</a>
            <a href="/blog">Blog</a>
            <a href="/iletisim">İletişim</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Tüm Hakları Saklıdır 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
