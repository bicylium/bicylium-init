import React, { useState } from 'react';
import './About.css';

// Import local image
import mechanicsImg from '../../img/20260608_172813.webp';

const About = () => {
  const [activePrinciple, setActivePrinciple] = useState('Yerellik');

  const principles = {
    'Yerellik': 'Fiziksel dükkanınızın kârlılığı ve uzmanlığınızın bilinirliği önceliklidir. Bicylium hikayenizi ön plana çıkararak ve müşterinizin sizi yerelde tanımasını destekler.',
    'Doğa Severlik': 'Bir sürdürülebilirlik politikası olmanın ötesinde doğa sevgisi ve onu koruma güdüsü ile aktivizme varacak şekilde hareket ediyoruz. Tüm paydaşlarımızdan da aynı yaklaşımda olmalarını bekliyoruz çünkü birlikte daha fazlasını başarabiliriz.',
    'Şeffaflık': 'Niyetimiz belli: değeri değere çevirmek ve muhafaza etmek. Daha fazla atölye açılmasını, daha fazla sporcu yetişmesini ve yerel ürünlerin üretilmesini sağlamak. Bu nedenle ister mağaza sahibi ister müşteri kısmında olun hangi misyonu desteklediğinizi bilmenizi isteriz.',
    'Merkeziyetsizlik': 'Sektörde tekelleşmeye ve yaptırımcılığa karşıyız. Bizim gibi düşünenlerle bir çatı altında dayanışma kurarız. Bunun dışında paydaşlarımızın zenginliğini ve çeşitliliğini savunuruz.',
    'Eşitlik': 'Dayanışma çatısı altında her paydaş eşittir.',
    'Dürüstlük': 'Çünkü en başta kendimize karşı dürüst olmalıyız. Eğer bunu başaramazsak misyonlarimizi gerçekleştiremeyiz ve hedeflerimize ulaşamayız.',
    'Dayanışma': 'Sömürücülük karşısında dayanışma ekonomisini savunuruz. Başkasının birikimi ve emeği üzerinden kâr etmeye değil onun hak şekilde işlem görmesini sağlarız.',
    'Elektriksellik': 'Sektörde örnek ve öncü olmak, hareketi başlatan ve ilk kıvılcımı yakan olmak bizi çok heyecanlandırır ve gururlandırır.'
  };

  const row1 = ['Yerellik', 'Doğa Severlik', 'Şeffaflık', 'Merkeziyetsizlik'];
  const row2 = ['Eşitlik', 'Dürüstlük', 'Dayanışma', 'Elektriksellik'];

  const isRow1Active = row1.includes(activePrinciple);
  const isRow2Active = row2.includes(activePrinciple);

  return (
    <div className="about-page">
      <div className="container">
        <section className="about-content">
          {/* Bicylium Nedir? */}
          <div className="about-section">
            <h3>Bicylium Nedir?</h3>
            <p>
              Bicylium, Türkiye'deki yerel bisiklet dükkanlarını dijital dünyaya taşıyan ve onları bisiklet kullanıcıları ile buluşturan dikey, çok satıcılı (multi-vendor) bir ekosistem platformudur. Sadece bir ürün satış platformu olmanın ötesinde; pazar yeri, servis randevu ağı, topluluk ve içerik katmanlarıyla Türkiye bisiklet sektörünün dijital evini inşa eder. "Ustalık" geleneğini ve bisiklet kültürünün dayanışma ekonomisini merkeze alarak, jenerik e-ticaret devlerinin kopyalayamayacağı derinlikte, kârlı ve sürdürülebilir bir değer zinciri yaratır.
            </p>
            <p>
              Bicylium; bisiklet dükkanlarının dijitalleşme ve büyüme aracı, bisiklet kullanıcılarının ise satın alma ve hizmet rehberidir. Platform, alışverişi salt bir "sepete ekle" işleminden çıkarıp ustalıkla çerçevelenmiş bir deneyime dönüştürür.
            </p>
          </div>

          {/* Hikayemiz */}
          <div className="about-section">
            <h3>Hikayemiz</h3>
            <div className="story-grid">
              <div>
                <p>
                  Bicylium, katılımcı bir girişim olarak çevrimiçi dünyada bisiklet mağazaları ile kullanıcıları buluşturma hedefi ile 2025 yılında ortaya çıktı. Bisikletin etrafında dönen insan hikâyeleri, ustalıklar ve yerel değerler için dijitalleşmenin önünü açarak bir dayanışma ekonomisi oluşturmayı amaçlıyor.
                </p>
                <p>
                  Bir bisiklet ekosistemi olarak, bisikleti sadece bir ulaşım aracı değil insanı bütünleyen iyileştirici bir unsur olarak görür. Türkiye’nin eşsiz ustalarının açtığı yolu devam ettirir, atalardan gelen mirası muhafaza eder ve bir iş modeli olmanın ötesine geçer. Zaman sınavından geçerek uzun vadede sektördeki belirleyici unsur haline gelir; sağlam, odaklanmış, temellendirilmiş yapısıyla ve kendi kültürünü oluşturmanın özgüveniyle var olur. Bisiklet sürüşünün kusursuzluğunu çevrimiçi alışveriş ve etkileşim tecrübesine yansıtır ve sektörün hak ettiği platform olarak konumlanır.
                </p>
                <p>
                  Bir girişim olarak, keskin bir duruşla çevreyi ve doğayı savunur, çizgisini her alanda koruyarak nitelikli içerik ve teknoloji üretir, bisikletliliği sürdürülebilir hale getirir.
                </p>
              </div>
              <div className="story-image-container">
                <img src={mechanicsImg} alt="Bisiklet Ustaları" />
              </div>
            </div>
            
            <p style={{ marginTop: '24px' }}>
              Bicylium bisiklet ekolünden gelenler tarafından düşünülmüştür dolayısıyla merkeziyetsiz olarak bisikletin olduğu her yer Bicylium için bir iş adresidir. Liderlik takımı kendisine ve işine gerektiği değeri veren, ciddiyetle yaklaşan, her zaman daha iyisini arzulayan ve arka planlarında fazlasıyla donanımlı, eğitimli, genç bir ekipten oluşur.
            </p>
          </div>

          {/* Felsefemiz */}
          <div className="about-section">
            <h3>Felsefemiz</h3>
            <p>
              Felsefemiz, sınırsız bir şekilde ilkeli bir topluluk ve adil bir gelir modelini önceler. Monetizasyon ve komisyonculuk karşısında merkeziyetsizliği, şeffaflığı ve otonom yapıyı savunuyoruz yani Bicylium’un sahiplerinin onun kullanıcıları ve üyeleri olması gerektiğine inanıyoruz. Bicylium doğaya, paydaşlarına, topluma karşı hissettiği sorumluluğu yerine getirmek için fahiş komisyonlara ihtiyaç duymaz; birliğe, birlikte harekete ve bağımsızlığa ihtiyaç duyar. O nedenle aracısı olduğu ekonomik döngünün de katılımcıları ile birlikte ortak akılla yönetilmesi gerektiğini savunur. Ülkemiz için üretim yolunu geliştirecek, bisiklet sektöründeki ve belki diğer toplumsal alanlardaki ekonomik sorunların çözüm formülünün bu tür bir paydaşlık mekanizması olduğuna inanıyoruz.
            </p>
            <p>
              Bir girişim olarak başlayan bu modeli ısrarlı bir şeffaflıkla ekonomik açıdan en sürdürülebilir biçimine getirmek önceliğimizdir. 'Bisikletçilerin Dijital Yurdu'nu oluşturma görevimiz ve üretken bir ekonomi oluşturma vizyonumuzu gerçekleştirme yolunda desteğiniz en önemli katkıdır.
            </p>
          </div>
        </section>
      </div>

      {/* İlkelerimiz */}
      <section className="principles-section">
        <div className="container">
          <div className="principles-header">
            <h3>İlkelerimiz</h3>
            <p>İlkelerimiz işimize, paydaşlarımıza olan yaklaşımımızı ve politikalarımızı belirler.</p>
          </div>

          {/* Row 1 */}
          <div className="principles-row">
            {row1.map((p) => (
              <button 
                key={p} 
                className={`principle-btn ${activePrinciple === p ? 'active' : ''}`}
                onClick={() => setActivePrinciple(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Description box positioned between row 1 and row 2 if row 1 is active */}
          {isRow1Active && (
            <div className="principle-desc-box">
              {principles[activePrinciple]}
            </div>
          )}

          {/* Row 2 */}
          <div className="principles-row">
            {row2.map((p) => (
              <button 
                key={p} 
                className={`principle-btn ${activePrinciple === p ? 'active' : ''}`}
                onClick={() => setActivePrinciple(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Description box positioned below row 2 if row 2 is active */}
          {isRow2Active && (
            <div className="principle-desc-box">
              {principles[activePrinciple]}
            </div>
          )}
        </div>
      </section>

      {/* Nasıl Konumlanıyor? */}
      <section className="position-section">
        <div className="container">
          <h3>Nasıl Konumlanıyor?</h3>
          <p className="position-intro">
            Bicylium, sıradan bir e-ticaret sitesi değil; derin, kadim ve "insan-makine" bağını anlayan bir yapıdır. Pazarın gürültüsünde kaybolmamak için gücünü yüzeysel pazarlama taktiklerinden değil, köklü felsefi akımlardan ve net bir arketipten alır. Bicylium'un temel karakteri, emeği ve ustalığı yücelten bir Zanaatkar ile ekosistemi bir araya getiren bir Bağlayıcıdır.
          </p>
          
          <div className="position-stack">
            <div className="position-quote-card">
              <p>
                “Bisikletini bir yaşam tarzı olarak gören bilinçli sürücüler için, Bicylium; Dijital E-ticaret içerisinde sadece bisiklete özel filtrelerle %100 uyumluluk ve entegre servis randevusu sağlayan tek platformdur.”
              </p>
            </div>
            <div className="position-quote-card">
              <p>
                "Bisiklet tutkunları ve yerel dükkan sahipleri için Bicylium, yerel ustaları görünür kılan ve topluluk inşa eden dikey niş bir pazaryeridir. Komisyoncu yaklaşımından farklı olarak, ustalık geleneğini ve şeffaf komisyonu ön plana çıkarır."
              </p>
            </div>
            <div className="position-quote-card">
              <p>
                “Bicylium, Türkiye'nin tek bisiklet çoklu satıcılı pazaryeri platformudur — ustalık hikayeleri ve topluluk katmanı ile yerel dükkanlar ve bisiklet tutkunları için dijital görünürlük sağlayan, İstanbul'dan başlayarak Türkiye geneline yayılan bir platformdur."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
