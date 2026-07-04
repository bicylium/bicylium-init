import React, { useState } from 'react';
import './Collaboration.css';

const Collaboration = () => {
  const [showSlides, setShowSlides] = useState(false);

  return (
    <div className="collab-page">

      <div className="container">
        <section className="collab-content">
          
          {/* İş Birliği Prensipleri */}
          <div className="collab-section">
            <h3>İş Birliği Prensipleri</h3>
            <div className="collab-details-list">
              <div className="collab-item">
                <strong>Şeffaflık ve Adil Paylaşım:</strong> Sürpriz kesintiler, gizli listeleme ücretleri veya haksız rekabete zorlayan reklam modelleri yoktur. Her paydaşın kazancını maksimize etmeyi hedefleriz.
              </div>
              <div className="collab-item">
                <strong>Uzmanlığa Saygı:</strong> Bisiklet sadece bir donanım değil, aynı zamanda bir mühendislik kültürüdür. Platformumuzda sadece işin ehli, yetkili ve referanslı dükkanlar yer alabilir.
              </div>
              <div className="collab-item">
                <strong>Veri Güvenliği ve Mülkiyet:</strong> Müşteriniz sizin müşterinizdir. Verilerinizi sizin aleyhinize pazarlama yapmak için asla kullanmayız.
              </div>
            </div>
          </div>

          {/* İşleyiş Yapısı */}
          <div className="collab-section">
            <h3>İşleyiş Yapısı</h3>
            <div className="collab-details-list">
              <div className="collab-item">
                <strong>Katılım Desteği:</strong> Sisteme kaydınızın ardından, ürün yükleme ve tüm diğer süreçlerde yanınızdayız.
              </div>
              <div className="collab-item">
                <strong>Stok ve Takvim Kontrolü:</strong> Kendi paneliniz üzerinden stoklarınızı anlık günceller, tamir/bakım randevusu için uygunluk takviminizi belirlersiniz.
              </div>
              <div className="collab-item">
                <strong>Otomatik Hakediş (Split Payment):</strong> Sipariş tamamlandığında platform komisyonu ayrılır ve hakedişiniz doğrudan banka hesabınıza aktarılır. Muhasebe karmaşası yaşamazsınız.
              </div>
            </div>
          </div>

          {/* Yönetim Yapısı */}
          <div className="collab-section">
            <h3>Yönetim Yapısı</h3>
            <div className="collab-details-list">
              <div className="collab-item">
                <strong>Merkeziyetsiz ve Katılımcı Otonomi:</strong> Bicylium, sadece tek bir merkezin kar aldığı bir tekel olarak işlemez. Gelecek vizyonumuzda, platformun kurallarının (komisyon oranları, eklenecek yeni özellikler, uyuşmazlık çözümleri) aktif mağazaların katılımıyla belirlediği, dayanışma kooperatifi ruhuyla çalışan bir yapı hedeflenmektedir.
              </div>
            </div>
          </div>

          {/* Şartlar ve Koşullar */}
          <div className="collab-section">
            <h3>Şartlar ve Koşullar</h3>
            <ul className="collab-bullets">
              <li>Sadece ticari unvana sahip resmi bisiklet dükkanları ve atölyeleri platforma katılabilir. (Bireysel ikinci el satış C2C şimdilik kapalıdır).</li>
              <li>Satıcı, ekosistemdeki fiyatlandırmasında "Adil Ticaret" kurallarına (fahiş fiyat uygulamamaya) uymayı taahhüt eder.</li>
              <li>Sistem üzerinden alınan bakım/servis randevularında müşteri memnuniyeti, platformun genel kalite puanını belirler.</li>
            </ul>
          </div>

          {/* Sunumu İnceleyin */}
          <div className="collab-section">
            <h3>Sunumu İnceleyin</h3>
            <p style={{ color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Pazar araştırmaları sonucu hazırladığımız ve size girişim hakkında daha fazla detay sağlayan sunumu inceleyebilirsiniz.
            </p>
            <button className="btn btn-primary" onClick={() => setShowSlides(!showSlides)}>
              İncele
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
            <h3>Ankete Katılın</h3>
            
            <div className="survey-row">
              <p>
                Ankete katılım Bicylium’un dayanışmacı misyonunu desteklediğini gösteren bir niyet mektubu niteliğindedir. Platformumuzu oluştururken sizlerin görüş ve önerileri işimizi geliştirecektir. Ayrıca bisikletçilerden oluşan ağımızı büyüterek dayanışmamızı güçlendirmektedir. Katılımızın için şimdiden teşekkür ederiz.
              </p>
              <a href="https://forms.gle/LMZyus92V3AVLVdx9" target="_blank" rel="noreferrer" className="btn btn-primary">
                Mağaza Anketi
              </a>
            </div>

            <div className="survey-row" style={{ marginTop: '40px' }}>
              <p>
                Müşterilere yönelik hazırladığımız ankete katılarak Bicylium’un alışveriş tecrübesini iyileştirmemize ve müşteri odaklı olarak iyileştirmemize yardımcı olabilirsiniz. Vakit ayırdığınız için teşekkür ederiz.
              </p>
              <a href="https://forms.gle/1Fbxkv2PUJ3dZqia6" target="_blank" rel="noreferrer" className="btn btn-primary">
                Müşteri Anketi
              </a>
            </div>
            
            <div className="collab-bottom-link">
              veya <a href="/iletisim">iletişim sayfamızdan form gönderebilirsiniz.</a>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Collaboration;
