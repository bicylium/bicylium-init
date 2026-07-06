import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

// Import local image
import mechanicsImg from '../../img/20260608_172813.webp';

const About = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState('principle1');

  const row1Keys = ['principle1', 'principle2', 'principle3', 'principle4'];
  const row2Keys = ['principle5', 'principle6', 'principle7', 'principle8'];

  const isRow1Active = row1Keys.includes(activeKey);
  const isRow2Active = row2Keys.includes(activeKey);

  return (
    <div className="about-page">
      <div className="container">
        <section className="about-content">
          {/* Bicylium Nedir? */}
          <div className="about-section">
            <h3>{t('about.whatIs')}</h3>
            <p>{t('about.whatIsDesc1')}</p>
            <p>{t('about.whatIsDesc2')}</p>
          </div>

          {/* Hikayemiz */}
          <div className="about-section">
            <h3>{t('about.story')}</h3>
            <div className="story-grid">
              <div>
                <p>{t('about.storyDesc1')}</p>
                <p>{t('about.storyDesc2')}</p>
                <p>{t('about.storyDesc3')}</p>
              </div>
              <div className="story-image-container">
                <img src={mechanicsImg} alt="Bisiklet Ustaları" />
              </div>
            </div>
            
            <p style={{ marginTop: '24px' }}>{t('about.storyDesc4')}</p>
          </div>

          {/* Felsefemiz */}
          <div className="about-section">
            <h3>{t('about.philosophy')}</h3>
            <p>{t('about.philosophyDesc1')}</p>
            <p>{t('about.philosophyDesc2')}</p>
          </div>
        </section>
      </div>

      {/* İlkelerimiz */}
      <section className="principles-section">
        <div className="container">
          <div className="principles-header">
            <h3>{t('about.principlesTitle')}</h3>
            <p>{t('about.principlesSubtitle')}</p>
          </div>

          {/* Row 1 */}
          <div className="principles-row">
            {row1Keys.map((key) => (
              <button 
                key={key} 
                className={`principle-btn ${activeKey === key ? 'active' : ''}`}
                onClick={() => setActiveKey(key)}
              >
                {t(`about.${key}Title`)}
              </button>
            ))}
          </div>

          {/* Description box */}
          {isRow1Active && (
            <div className="principle-desc-box">
              {t(`about.${activeKey}Desc`)}
            </div>
          )}

          {/* Row 2 */}
          <div className="principles-row">
            {row2Keys.map((key) => (
              <button 
                key={key} 
                className={`principle-btn ${activeKey === key ? 'active' : ''}`}
                onClick={() => setActiveKey(key)}
              >
                {t(`about.${key}Title`)}
              </button>
            ))}
          </div>

          {/* Description box */}
          {isRow2Active && (
            <div className="principle-desc-box">
              {t(`about.${activeKey}Desc`)}
            </div>
          )}
        </div>
      </section>

      {/* Nasıl Konumlanıyor? */}
      <section className="position-section">
        <div className="container">
          <h3>{t('about.positionTitle')}</h3>
          <p className="position-intro">{t('about.positionIntro')}</p>
          
          <div className="position-stack">
            <div className="position-quote-card">
              <p>{t('about.positionQuote1')}</p>
            </div>
            <div className="position-quote-card">
              <p>{t('about.positionQuote2')}</p>
            </div>
            <div className="position-quote-card">
              <p>{t('about.positionQuote3')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
