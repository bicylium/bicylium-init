import React, { useState } from 'react';
import './Home.css';

// SVG imports from project folders
import uyumMatrisiIcon from '../../icons/uyum_matrisi.svg';
import daimiDestekIcon from '../../icons/daimi_destek.svg';
import youtubeIcon from '../../icons/youtube.svg';
import instagramIcon from '../../icons/Instagram.svg';

// Image imports
import trail1Img from '../../img/cannondale-trail-1-tiger-shark-2.webp';
import fizikSeleImg from '../../img/fizik_sele.png';
import shimanoAktarImg from '../../img/shimano_aktar.png';
import impactUrunImg from '../../img/impact-urun.png';
import redJerseyImg from '../../img/red-jersey-vittoria.webp';
import framesetImg from '../../img/Frameset_FS120-6_1200.png';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('Geometri');

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
          <h6>Bisikletçilerin Dijital Evi’ne</h6>
          <h1>Hoşgeldiniz</h1>
          <p className="hero-subtitle">
            Bicylium, Türkiye'deki yerel bisiklet dükkanlarını dijital dünyaya taşıyan ve onları bisiklet kullanıcıları ile buluşturan dikey, çok paydaşlı bir ekosistem platformudur.
          </p>
          <a href="/hakkinda" className="btn btn-outline">Hakkında</a>
        </div>
      </section>

      {/* Neden Bicylium? */}
      <section className="features">
        <div className="container">
          <h2>Neden Bicylium?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <img src={uyumMatrisiIcon} alt="Uyumluluk" className="feature-card-icon" />
              <h3>Uyumluluk Matrisi</h3>
              <p>Yanlış siparişlerden kaynaklı zararların önüne geçer.</p>
            </div>
            
            <div className="feature-card">
              <span className="feature-card-value">%0</span>
              <h3>Komisyonsuz</h3>
              <p>Kazancınız arttıkça platform katılım bedeli sabit kalır.</p>
            </div>
            
            <div className="feature-card">
              <img src={daimiDestekIcon} alt="Daimi Destek" className="feature-card-icon" />
              <h3>Daimi Destek</h3>
              <p>Dayanışma ekonomisi olarak sürecin her anında yanınızda.</p>
            </div>
          </div>
          <a href="/is-birligi" className="btn btn-primary">Daha fazla</a>
        </div>
      </section>

      {/* Customization section */}
      <section className="customization-section">
        <div className="container">
          <div className="customization-header">
            <h2>Bisiklet mağazanızı ve atölyenizi dijitale taşıyın</h2>
            <div className="customization-sub">
              <h4>Bisiklet için özelleştirildi</h4>
              <p>Bisiklet dünyasının kendine özgü özellikleri için yapılandırılmış gelişmiş ürün arama ve parça uyum mimarisi</p>
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
            <h2>Gelişmiş ürün kategorisi</h2>
            <p>Sayısız ekipman ve aksesuarlara özel olarak hazırlanmış ürün kategorileri.</p>
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
              <h3>Topluluğumuzun gücünü<br/>üretime çevirelim</h3>
              <p>
                Bicylium sadece bir ürün satış platformu değildir. Ağımız genişledikçe topluluk katmanı güçlenerek üretim hedeflerimizin yolunu açacak ve sektörümüze pozitif katkı sağlayacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İş Birliği CTA */}
      <section className="collab-cta">
        <div className="container">
          <h6>Ekosistemin Kurucu Mağazalarından Biri Olun</h6>
          <h2>İş Birliği</h2>
          <p>
            Bicylium’un iş birliği prensipleri, sistemin yapısı ve işleyişi hakkında daha fazla bilgi edinin. Sunumu inceleyin ve ankete katılın
          </p>
          <a href="/is-birligi" className="btn btn-primary">Daha fazla</a>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <h2>Blog</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-tags">
                <span className="blog-tag">Video</span>
              </div>
              <div className="blog-image-box"></div>
              <div className="blog-date">27.08.26'de yükledi</div>
              <h3>Yol , Şimdi YouTube'da Yayında!</h3>
              <p>Hepimizin bir yol'u var, bu kısa metrajlı belgesel sayesinde onu anlamaya biraz daha yaklaşıyoruz</p>
            </div>

            <div className="blog-card">
              <div className="blog-tags">
                <span className="blog-tag">Podcast</span>
              </div>
              <div className="blog-image-box"></div>
              <div className="blog-date">18.06.26'de yükledi</div>
              <h3>Bisiklet Günlüğü Podcasti'nin 14. Bölümü Yüklendi</h3>
              <p>Podcast'in bu bölümünde müthiş bir konuk ağırlıyoruz, duayen bisikletçi Gürsel Akay bizlere akıl almaz hikayelerle dolu bir saat yaşatıyor.</p>
            </div>

            <div className="blog-card">
              <div className="blog-tags">
                <span className="blog-tag">İnceleme</span>
              </div>
              <div className="blog-image-box"></div>
              <div className="blog-date">04.05.26'da yükledi</div>
              <h3>'Kadro Boyu' gizemini Çözüyoruz</h3>
              <p>Kadro boyu ile ilgili merak ettiğiniz tüm detayları incelemeye aldık ve bu makaleyi okuduktan sonra kadro boyları bir daha aklınızı karıştırmayacak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-grid">
            <div className="newsletter-texts">
              <h6>Kayıt Olun</h6>
              <h2>Haber alın</h2>
              <p>Kampanyalar, indirimler ve yenilikleri kaçırmayın</p>
            </div>
            
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="newsletter-input" required />
              <button type="submit" className="newsletter-btn">Katıl</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
