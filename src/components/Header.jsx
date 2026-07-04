import React, { useState } from 'react';
import logo from '../../img/Bicylium Logo.svg';
import turkishFlag from '../../icons/turk-bayrak.svg';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="/" onClick={() => setMenuOpen(false)}>Anasayfa</a>
          <a href="/hakkinda" onClick={() => setMenuOpen(false)}>Hakkında</a>
          <a href="/is-birligi" onClick={() => setMenuOpen(false)}>İş Birliği</a>
          <a href="/iletisim" onClick={() => setMenuOpen(false)}>İletişim</a>
          
          <button className="lang-btn">
            <img src={turkishFlag} alt="TR" className="flag-icon" />
            <span>TR</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
