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

          {/* Yeni Girişim Başlangıç Alanı */}
          <div className="collab-launch-section">
            <h2 className="text-center" style={{ marginBottom: "60px", marginTop: "80px" }}>
              {t('collaboration.launchTitle')}
            </h2>

            {/* Adım 1: Sunumu İnceleyin */}
            <div className="collab-step-row right-align" id="sunum-section">
              <div className="collab-step-icon-wrapper">
                <div className="step-number">1</div>
                <svg width="175" height="184" viewBox="0 0 175 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M172.802 4.39698C173.385 4.39698 173.944 4.16536 174.356 3.75306C174.768 3.34076 175 2.78157 175 2.19849C175 1.61542 174.768 1.05622 174.356 0.643924C173.944 0.231627 173.385 0 172.802 0H2.19849C1.61542 0 1.05622 0.231627 0.643924 0.643924C0.231627 1.05622 0 1.61542 0 2.19849C0 2.78157 0.231627 3.34076 0.643924 3.75306C1.05622 4.16536 1.61542 4.39698 2.19849 4.39698H17.1482V106.847H2.19849C1.61542 106.847 1.05622 107.078 0.643924 107.491C0.231627 107.903 0 108.462 0 109.045C0 109.628 0.231627 110.187 0.643924 110.6C1.05622 111.012 1.61542 111.244 2.19849 111.244H85.3015V144.661H84.8618L52.9837 176.759C52.7317 176.948 52.5232 177.189 52.3725 177.465C52.2217 177.742 52.1321 178.048 52.1098 178.362C52.0875 178.676 52.1329 178.991 52.2431 179.286C52.3532 179.581 52.5255 179.849 52.7482 180.072C52.9709 180.295 53.2389 180.467 53.534 180.577C53.8291 180.687 54.1444 180.733 54.4586 180.711C54.7728 180.688 55.0785 180.599 55.3551 180.448C55.6316 180.297 55.8726 180.089 56.0616 179.837L85.3015 150.597V181.595C85.3015 182.179 85.5331 182.738 85.9454 183.15C86.3577 183.562 86.9169 183.794 87.5 183.794C88.0831 183.794 88.6423 183.562 89.0546 183.15C89.4669 182.738 89.6985 182.179 89.6985 181.595V150.597L118.938 179.837C119.362 180.154 119.885 180.308 120.413 180.271C120.941 180.233 121.438 180.007 121.812 179.632C122.186 179.258 122.413 178.762 122.45 178.234C122.488 177.706 122.334 177.182 122.016 176.759L90.1382 144.881H89.6985V111.244H172.802C173.385 111.244 173.944 111.012 174.356 110.6C174.768 110.187 175 109.628 175 109.045C175 108.462 174.768 107.903 174.356 107.491C173.944 107.078 173.385 106.847 172.802 106.847H158.072V4.39698H172.802ZM153.675 106.847H21.3254V4.39698H153.675V106.847Z" fill="black"/>
                  <path d="M50.5657 35.1759H76.0682C76.6513 35.1759 77.2105 34.9443 77.6228 34.532C78.0351 34.1197 78.2667 33.5605 78.2667 32.9774C78.2667 32.3943 78.0351 31.8351 77.6228 31.4229C77.2105 31.0106 76.6513 30.7789 76.0682 30.7789H50.5657C49.9826 30.7789 49.4234 31.0106 49.0111 31.4229C48.5988 31.8351 48.3672 32.3943 48.3672 32.9774C48.3672 33.5605 48.5988 34.1197 49.0111 34.532C49.4234 34.9443 49.9826 35.1759 50.5657 35.1759Z" fill="black"/>
                  <path d="M50.5657 59.3593H124.435C125.018 59.3593 125.577 59.1276 125.99 58.7153C126.402 58.303 126.634 57.7438 126.634 57.1608C126.634 56.5777 126.402 56.0185 125.99 55.6062C125.577 55.1939 125.018 54.9623 124.435 54.9623H50.5657C49.9826 54.9623 49.4234 55.1939 49.0111 55.6062C48.5988 56.0185 48.3672 56.5777 48.3672 57.1608C48.3672 57.7438 48.5988 58.303 49.0111 58.7153C49.4234 59.1276 49.9826 59.3593 50.5657 59.3593Z" fill="black"/>
                  <path d="M124.435 79.1458H50.5657C49.9826 79.1458 49.4234 79.3774 49.0111 79.7897C48.5988 80.202 48.3672 80.7612 48.3672 81.3442C48.3672 81.9273 48.5988 82.4865 49.0111 82.8988C49.4234 83.3111 49.9826 83.5427 50.5657 83.5427H124.435C125.018 83.5427 125.577 83.3111 125.99 82.8988C126.402 82.4865 126.634 81.9273 126.634 81.3442C126.634 80.7612 126.402 80.202 125.99 79.7897C125.577 79.3774 125.018 79.1458 124.435 79.1458Z" fill="black"/>
                </svg>
              </div>
              <div className="collab-step-content">
                <div className="subtitle-mono text-right" style={{ marginBottom: "8px", textTransform: 'none' }}>{t('collaboration.subtitleInfo')}</div>
                <h3 className="text-right" style={{ marginBottom: "16px" }}>{t('collaboration.title5')}</h3>
                <p className="text-right" style={{ marginBottom: "24px", color: 'var(--color-black)' }}>
                  {t('collaboration.presDesc')}
                </p>
                <div className="text-right">
                  <button className="btn btn-accent" onClick={() => setShowSlides(!showSlides)}>
                    {t('collaboration.presBtn')}
                  </button>
                </div>
              </div>
            </div>

            {showSlides && (
              <div className="collab-presentation-wrapper" style={{ marginTop: "40px", marginBottom: "40px" }}>
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

            {/* Adım 2: Ankete Katılın */}
            <div className="collab-step-row left-align" style={{ marginTop: "100px", marginBottom: "80px" }}>
              <div className="collab-step-content">
                <div className="subtitle-mono text-left" style={{ marginBottom: "8px", textTransform: 'none' }}>{t('collaboration.subtitleFeedback')}</div>
                <h3 className="text-left" style={{ marginBottom: "16px" }}>{t('collaboration.title6')}</h3>
                <p className="text-left" style={{ marginBottom: "24px", color: 'var(--color-black)' }}>
                  {t('collaboration.survey1Desc')}
                </p>
                <div className="text-left">
                  <a href="https://forms.gle/LMZyus92V3AVLVdx9" target="_blank" rel="noreferrer" className="btn btn-accent">
                    {t('collaboration.survey1Btn')}
                  </a>
                </div>
              </div>
              <div className="collab-step-icon-wrapper">
                <div className="step-number">2</div>
                <svg width="187" height="172" viewBox="0 0 187 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.94722 0.0160868C4.46849 0.0160868 0 4.50808 0 10.0156V162C0 167.508 4.46849 172 9.94722 172H117.377C122.856 172 127.324 167.508 127.324 162V116.057L132.135 113.822C132.345 113.721 132.539 113.588 132.702 113.416L186.417 59.4186C187.194 58.6374 187.194 57.372 186.417 56.5906L172.491 42.5912C171.729 41.8178 170.486 41.8022 169.701 42.56L127.316 83.6441V9.99953C127.316 4.49199 122.848 0 117.369 0L9.94722 0.0160868ZM9.94722 4.0159H117.377C120.719 4.0159 123.345 6.65637 123.345 10.0156V87.52L114.004 96.5664C113.795 96.7695 113.631 97.0194 113.53 97.2851L103.583 123.284C102.938 124.963 104.656 126.573 106.272 125.815L123.346 117.894V161.993C123.346 165.353 120.719 167.993 117.377 167.993H9.94726C6.60559 167.993 3.97893 165.353 3.97893 161.993V10.0086C3.97893 6.64933 6.60559 4.00886 9.94726 4.00886L9.94722 4.0159ZM48.2042 34.7245L29.8174 56.9034L19.4116 44.7008C18.6967 43.8649 17.4455 43.7633 16.614 44.482C15.7825 45.2008 15.6815 46.4663 16.3965 47.3023L28.3331 61.3016C29.1336 62.2391 30.5868 62.2313 31.3716 61.2782L51.266 37.2793C51.9654 36.4278 51.8567 35.17 51.0096 34.4671C50.1703 33.764 48.9113 33.8734 48.212 34.7249L48.2042 34.7245ZM65.6506 46.0129C64.5549 46.0129 63.6612 46.9113 63.6612 48.0128C63.6612 49.1143 64.5549 50.0127 65.6506 50.0127H109.418C110.514 50.0127 111.408 49.1143 111.408 48.0128C111.408 46.9113 110.514 46.0129 109.418 46.0129H65.6506ZM171.059 46.8098L182.196 58.0046L174.23 66.0121L163.715 53.9266L171.059 46.8098ZM160.848 56.7077L171.417 68.8477C158.159 82.0033 146.223 94.0026 129.157 110.792L118.13 98.1206L160.848 56.7077ZM48.2036 70.7226L29.8168 92.9016L19.411 80.699C18.6961 79.8631 17.4449 79.7615 16.6134 80.4802C15.7819 81.199 15.6809 82.4645 16.3959 83.3005L28.3325 97.2998C29.133 98.2373 30.5862 98.2295 31.371 97.2764L51.2654 73.2775C51.9648 72.426 51.8561 71.1682 51.009 70.4653C50.1619 69.7622 48.9107 69.8793 48.2114 70.7231L48.2036 70.7226ZM65.65 82.0033C64.5543 82.0033 63.6606 82.9017 63.6606 84.0032C63.6606 85.1047 64.5543 86.0031 65.65 86.0031H109.418C110.514 86.0031 111.407 85.1047 111.407 84.0032C111.407 82.9017 110.514 82.0033 109.418 82.0033H65.65ZM116.063 101.807L125.396 112.533L109.061 120.111L116.063 101.807ZM20.4837 110.58C19.7066 111.361 19.7066 112.627 20.4837 113.408L31.0138 123.994L20.4837 134.579C19.7066 135.36 19.7066 136.626 20.4837 137.407C21.2608 138.188 22.5197 138.188 23.297 137.407L33.8271 126.822L44.3572 137.407C45.1343 138.188 46.3932 138.188 47.1705 137.407C47.9476 136.626 47.9476 135.36 47.1705 134.579L36.6404 123.994L47.1705 113.408C47.9476 112.627 47.9476 111.361 47.1705 110.58C46.3934 109.799 45.1345 109.799 44.3572 110.58L33.8271 121.165L23.297 110.58C22.5198 109.799 21.261 109.799 20.4837 110.58ZM65.658 121.993C64.5623 121.993 63.6686 122.892 63.6686 123.993C63.6686 125.095 64.5623 125.993 65.658 125.993H89.5313C90.6271 125.993 91.5208 125.095 91.5208 123.993C91.5208 122.892 90.6271 121.993 89.5313 121.993H65.658Z" fill="black"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Siyah Banner */}
          <div className="collab-banner bg-black text-center" style={{ padding: "40px 20px", marginBottom: "80px" }}>
            <h5 style={{ color: "var(--color-white)", margin: 0, fontWeight: 500 }}>
              {t('collaboration.bannerText')}
            </h5>
          </div>
          
          {/* Bisiklet Kullanıcıları İçin */}
          <div className="collab-users-section text-center" style={{ marginBottom: "80px" }}>
            <h2 style={{ marginBottom: "16px" }}>{t('collaboration.usersTitle')}</h2>
            <p style={{ marginBottom: "24px", color: 'var(--color-black)', maxWidth: "800px", margin: "0 auto 24px auto" }}>
              {t('collaboration.survey2Desc')}
            </p>
            <a href="https://forms.gle/1Fbxkv2PUJ3dZqia6" target="_blank" rel="noreferrer" className="btn btn-accent">
              {t('collaboration.survey2Btn')}
            </a>
          </div>

          {/* Görüş ve önerileriniz için */}
          <div className="collab-bottom-link text-center" style={{ marginTop: "40px" }}>
            <h5 style={{ fontWeight: 600 }}>
              {t('collaboration.bottomLink')}
            </h5>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Collaboration;
