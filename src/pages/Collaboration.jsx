import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Collaboration.css';

const Collaboration = () => {
  const { t } = useTranslation();
  const [showSlides, setShowSlides] = useState(false);

  return (
    <div className="collab-page">

      <div className="container">
        <section className="collab-content">

          {/* İş Birliği Prensipleri */}
          <div className="collab-section">
            <h3>{t('collaboration.title1')}</h3>
            <div className="collab-details-list">
              <div className="collab-item">
                <strong>{t('collaboration.prin1Title')}:</strong> {t('collaboration.prin1Desc')}
              </div>
              <div className="collab-item">
                <strong>{t('collaboration.prin2Title')}:</strong> {t('collaboration.prin2Desc')}
              </div>
              <div className="collab-item">
                <strong>{t('collaboration.prin3Title')}:</strong> {t('collaboration.prin3Desc')}
              </div>
            </div>
          </div>

          {/* İşleyiş Yapısı */}
          <div className="collab-section">
            <h3>{t('collaboration.title2')}</h3>
            <div className="survey-row" style={{ marginBottom: '24px' }}>
              <p>{t('collaboration.flowDesc1')}</p>
              <p>
                {t('collaboration.flowDesc2')} {t('collaboration.flowDesc2Part2')} <span style={{ color: "var(--color-primary)", textDecoration: "underline", cursor: "pointer" }} onClick={(e) => { e.preventDefault(); setShowSlides(true); document.getElementById('sunum-section')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('collaboration.flowDesc2Link')}</span> {t('collaboration.flowDesc2Part3')}
              </p>
              <p>{t('collaboration.flowDesc3')}</p>
            </div>
            <div className="collab-details-list">
              <div className="collab-item">
                <strong>{t('collaboration.flow1Title')}:</strong> {t('collaboration.flow1Desc')}
              </div>
              <div className="collab-item">
                <strong>{t('collaboration.flow2Title')}:</strong> {t('collaboration.flow2Desc')}
              </div>
              <div className="collab-item">
                <strong>{t('collaboration.flow3Title')}:</strong> {t('collaboration.flow3Desc')}
              </div>
            </div>
          </div>

          {/* Yönetim Yapısı */}
          <div className="collab-section">
            <h3>{t('collaboration.title3')}</h3>
            <div className="collab-details-list">
              <div className="collab-item">
                <strong>{t('collaboration.mgmtTitle')}:</strong> {t('collaboration.mgmtDesc')}
              </div>
            </div>
          </div>

          {/* Şartlar ve Koşullar */}
          <div className="collab-section">
            <h3>{t('collaboration.title4')}</h3>
            <ul className="collab-bullets">
              <li>{t('collaboration.term1')}</li>
              <li>{t('collaboration.term2')}</li>
              <li>{t('collaboration.term3')}</li>
            </ul>
          </div>

          {/* Sunumu İnceleyin */}
          <div className="collab-section" id="sunum-section">
            <h3>{t('collaboration.title5')}</h3>
            <p style={{ color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              {t('collaboration.presDesc')}
            </p>
            <button className="btn btn-primary" onClick={() => setShowSlides(!showSlides)}>
              {t('collaboration.presBtn')}
            </button>

            {showSlides && (
              <div className="collab-presentation-wrapper">
                <div className="slides-iframe-container">
                  <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRMl8CoBcBipJdk6mwqTsjOC2tJpv1JzwWiGXWr8ftef4mFwyh9ZGlao30L2suX42hyuEVsdupotNST/pubembed?start=false&loop=false&delayms=3000"
                    frameBorder="0"
                    allowFullScreen={true}
                    title="Bicylium Sunumu"
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Ankete Katılın */}
          <div className="collab-section">
            <h3>{t('collaboration.title6')}</h3>

            <div className="survey-row">
              <p>{t('collaboration.survey1Desc')}</p>
              <a href="https://forms.gle/LMZyus92V3AVLVdx9" target="_blank" rel="noreferrer" className="btn btn-primary">
                {t('collaboration.survey1Btn')}
              </a>
            </div>

            <div className="survey-row" style={{ marginTop: '40px' }}>
              <p>{t('collaboration.survey2Desc')}</p>
              <a href="https://forms.gle/1Fbxkv2PUJ3dZqia6" target="_blank" rel="noreferrer" className="btn btn-primary">
                {t('collaboration.survey2Btn')}
              </a>
            </div>

            <div className="collab-bottom-link">
              {t('collaboration.surveyOr1')} <a href="/iletisim">{t('collaboration.surveyOr2')}</a>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Collaboration;
