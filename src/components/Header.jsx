import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../img/Bicylium Logo.svg';
import turkishFlag from '../../icons/turk-bayrak.svg';
import englishFlag from '../../icons/eng-bayrak.svg';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const currentFlag = i18n.language === 'en' ? englishFlag : turkishFlag;

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo-link">
          <img src={logo} alt="Bicylium Logo" className="logo-img" />
        </a>
        
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>{t('header.home')}</a>
          <a href="/hakkinda" onClick={() => setMenuOpen(false)}>{t('header.about')}</a>
          <a href="/is-birligi" onClick={() => setMenuOpen(false)}>{t('header.collaboration')}</a>
          <a href="/iletisim" onClick={() => setMenuOpen(false)}>{t('header.contact')}</a>
          
          <div className="lang-dropdown-wrapper">
            <button className="lang-btn" aria-label="Dil Seçimi" onClick={() => setLangOpen(!langOpen)}>
              <img src={currentFlag} alt={i18n.language} className="flag-icon" />
            </button>
            {langOpen && (
              <div className="lang-dropdown">
                <button onClick={() => changeLanguage('tr')} className="lang-option">
                  <img src={turkishFlag} alt="TR" className="flag-icon-small" /> Türkçe
                </button>
                <button onClick={() => changeLanguage('en')} className="lang-option">
                  <img src={englishFlag} alt="EN" className="flag-icon-small" /> English
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
