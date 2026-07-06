import React, { useState, useEffect } from 'react';
import { contentfulClient } from '../contentful';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Home.css';

// SVG imports from project folders
import uyumMatrisiIcon from '../../icons/uyum_matrisi.svg';
import daimiDestekIcon from '../../icons/daimi_destek.svg';

// Image imports
import trail1Img from '../../img/cannondale-trail-1-tiger-shark-2.webp';
import fizikSeleImg from '../../img/fizik_sele.png';
import shimanoAktarImg from '../../img/shimano_aktar.png';
import impactUrunImg from '../../img/impact-urun.png';
import redJerseyImg from '../../img/red-jersey-vittoria.webp';
import framesetImg from '../../img/Frameset_FS120-6_1200.png';

const Home = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('Geometri');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    contentfulClient.getEntries({ content_type: 'blogPost', limit: 3 })
      .then((response) => {
        setPosts(response.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('İçerik yüklenirken hata:', error);
        setLoading(false);
      });
  }, []);

  const parameterData = {
    'Kadro Seti': ['Kadro Tipi', 'Maşa', 'Kablo Yolu', 'Kadro boyu', 'Furş takımı'],
    'Aktarma Organları': ['Arka Vites Aktarıcı', 'Zincir', 'Ön Vites Aktarıcı', 'Krank', 'Aynakol', 'Orta Göbek'],
    'Bileşenler': ['Gidon', 'Gidon Tutucu', 'Elcikler', 'Sele', 'Sele Borusu'],
    'Geometri': ['Reach', 'Stack', 'Kadro Boyu', 'Furş Açısı', 'Aks Mesafesi'],
    'Tekerler': ['Ön göbek', 'Arka göbek', 'Lastik', 'Jant', 'Lastik Boyutu'],
    'Fren': ['Rotor', 'Fren Merkezi Tipi', 'Balata', 'Fren Kolu Tipi']
  };

  const categories = ['Kadro Seti', 'Geometri', 'Aktarma Organları', 'Tekerler', 'Bileşenler', 'Fren'];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h6>{t('home.heroPretitle')}</h6>
          <h1>{t('home.heroWelcome')}</h1>
          <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
          <a href="/hakkinda" className="btn btn-outline">{t('home.btnAbout')}</a>
        </div>
      </section>

      {/* Neden Bicylium? */}
      <section className="features">
        <div className="container">
          <h2>{t('home.whyBicylium')}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src={uyumMatrisiIcon} alt="Uyumluluk" className="feature-card-icon" />
              <h3>{t('home.compatibility')}</h3>
              <p>{t('home.compatibilityDesc')}</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-card-value">%0</span>
              <h3>{t('home.noCommission')}</h3>
              <p>{t('home.noCommissionDesc')}</p>
            </div>
            
            <div className="feature-card">
              <img src={daimiDestekIcon} alt="Daimi Destek" className="feature-card-icon" />
              <h3>{t('home.support')}</h3>
              <p>{t('home.supportDesc')}</p>
            </div>
          </div>
          <a href="/is-birligi" className="btn btn-primary">{t('home.btnMore')}</a>
        </div>
      </section>

      {/* Customization section */}
      <section className="customization-section">
        <div className="container">
          <div className="customization-header">
            <h2>{t('home.digitalize')}</h2>
            <div className="customization-sub">
              <h4>{t('home.customized')}</h4>
              <p>{t('home.customizedDesc')}</p>
            </div>
          </div>
          
          <div className="customization-grid">
            <div className="bike-display-container">
              <span className="bike-title">Dağ / Parkur / Trail 1</span>
              <div className="bike-image-box">
                <img src={trail1Img} alt="Dağ/Parkur Bisikleti" className="bike-image" />
              </div>
            </div>
            
            <div>
              <div className="category-buttons-grid">
                {categories.map((cat) => (
                  <div key={cat} className="category-item-wrapper">
                    <button 
                      className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                    {activeCategory === cat && (
                      <div className="category-params-list">
                        {parameterData[cat].map((param, index) => (
                          <span key={index} className="param-tag">{param}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gelişmiş Ürün Kategorisi */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2>{t('home.advancedProducts')}</h2>
            <p>{t('home.advancedProductsDesc')}</p>
          </div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-container">
                <img src={fizikSeleImg} alt="Fizik Klik Sele Çantası" />
              </div>
              <div className="product-details">
                <div className="product-category-label">Aksesuar</div>
                <div className="product-title">Fizik Klik Sele Çantası</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src={shimanoAktarImg} alt="Shimano Arka Vites Değiştirici" />
              </div>
              <div className="product-details">
                <div className="product-category-label">Yedek Parça</div>
                <div className="product-title">Shimano Arka Vites Değiştirici</div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src={impactUrunImg} alt="Impact Bisiklet Şampuanı" />
              </div>
              <div className="product-details">
                <div className="product-category-label">Tamir&Bakım</div>
                <div className="product-title">Impact Bisiklet Şampuanı</div>
              </div>
            </div>

            <div className="product-card fade-card">
              <div className="product-image-container">
                <img src={redJerseyImg} alt="Vittoria Bisiklet Forması" />
              </div>
              <div className="product-details">
                <div className="product-category-label">Giyim</div>
                <div className="product-title">Vittoria Bisiklet Forması</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servis Section */}
      <section className="service-section">
        <div className="container">
          <div className="service-grid">
            <div className="service-image-box">
              <img src={framesetImg} alt="Bisiklet Kadrosu" className="service-image" />
            </div>
            
            <div className="service-texts">
              <h3 style={{whiteSpace: 'pre-line'}}>{t('home.communityPower')}</h3>
              <p>{t('home.communityPowerDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* İş Birliği CTA */}
      <section className="collab-cta">
        <div className="container">
          <h6>{t('home.collabCtaPretitle')}</h6>
          <h2>{t('home.collabCtaTitle')}</h2>
          <p>{t('home.collabCtaDesc')}</p>
          <a href="/is-birligi" className="btn btn-primary">{t('home.btnMore')}</a>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <h2>{t('blog.title')}</h2>
          <div className="blog-grid">
            {loading ? (
              <p style={{ color: '#aaa', gridColumn: '1 / -1', textAlign: 'center' }}>{t('blog.loading')}</p>
            ) : posts.length > 0 ? (
              posts.map(post => {
                const { baslik, ozet, goruntu, yazar } = post.fields;
                const date = new Date(post.sys.createdAt).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: '2-digit' });
                const imageUrl = goruntu?.fields?.file?.url;
                
                return (
                  <Link to={`/blog/${post.sys.id}`} className="blog-card" key={post.sys.id} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                    <div className="blog-tags">
                      <span className="blog-tag">{t('blog.article')}</span>
                    </div>
                    {imageUrl ? (
                      <div className="blog-image-box" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    ) : (
                      <div className="blog-image-box"></div>
                    )}
                    <div className="blog-date">{t('blog.uploadedBy', { date, author: yazar?.fields?.isim || 'Bicylium' })}</div>
                    <h3>{baslik}</h3>
                    <p>{ozet}</p>
                  </Link>
                );
              })
            ) : (
              <p style={{ color: '#aaa', gridColumn: '1 / -1', textAlign: 'center' }}>{t('blog.noContent')}</p>
            )}
          </div>
          <div className="blog-view-all">
            <a href="/blog" className="btn btn-outline">{t('home.viewAll')}</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-grid">
            <div className="newsletter-texts">
              <h6>{t('home.newsletterPretitle')}</h6>
              <h2>{t('home.newsletterTitle')}</h2>
              <p>{t('home.newsletterDesc')}</p>
            </div>
            
            <form 
              className="newsletter-form" 
              name="newsletter" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                if (formData.get('bot-field')) return; // Honeypot
                
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(formData).toString()
                }).then(() => {
                  alert(t('home.newsletterSuccess'));
                  e.target.reset();
                }).catch(err => console.error(err));
              }}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div style={{ display: 'none' }}>
                <input name="bot-field" />
              </div>
              <input type="email" name="email" className="newsletter-input" required placeholder={t('home.newsletterPlaceholder')} />
              <button type="submit" className="newsletter-btn">{t('home.newsletterBtn')}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
