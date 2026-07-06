import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../img/Bicylium Logo.svg';
import youtubeIcon from '../../icons/youtube.svg';
import instagramIcon from '../../icons/Instagram.svg';
import './Layout.css';

const Footer = () => {
  const { t } = useTranslation();
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
            <a href="/hakkinda">{t('footer.about')}</a>
            <a href="/is-birligi">{t('footer.collaboration')}</a>
            <a href="/blog">{t('footer.blog')}</a>
            <a href="/iletisim">{t('footer.contact')}</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
