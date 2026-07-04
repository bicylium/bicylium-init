import React, { useState, useEffect } from 'react';
import gearIcon from '../../icons/vites-degistirici.svg';
import bisikletIcon from '../../icons/bisiklet.svg';
import liraIcon from '../../icons/turk-lirasi-guven.svg';
import './Eyebrow.css';

const SLIDES = [
  {
    badge: ['Komisyonsuz', ''],
    title: 'Adil Ticaret İlkesi ve Şeffaf Ekonomi',
    desc: 'Sabit katılım bedeli ile ilkeli, katılımcı işbirliği ile adil bir sistem oluşturuyoruz',
    centerTitle: 'Ürün Matrisi',
    centerDesc: 'Bisiklete özel parça uyum matrisi',
    icon: gearIcon,
    iconAlt: 'Ürün Matrisi',
  },
  {
    badge: ['Doğa', 'Dostu'],
    title: 'Çevreci misyonumuza destek ol',
    desc: 'Doğayı koruma konusundaki keskin duruşumuzda bize katıl',
    centerTitle: 'Bisiklet Garajı',
    centerDesc: 'Bisikletlerinizi ekleyin ve bakım kaydı oluşturun',
    icon: bisikletIcon,
    iconAlt: 'Bisiklet Garajı',
  },
  {
    badge: ['Ustalığa', 'Saygılı'],
    title: "Türkiye'nin bisiklet ustalarını keşfet",
    desc: 'Hikayelerini dinle, ihtiyaç duyduğun ürünü güvenle al',
    centerTitle: 'Güvenli Ödeme Altyapısı',
    centerDesc: 'Bağımsız ve yüksek güvenlikli altyapı',
    icon: liraIcon,
    iconAlt: 'Güvenli Ödeme',
  },
];

const Eyebrow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[activeIndex];

  return (
    <div className="eyebrow">

      {/* 1. Alan: Siyah badge */}
      <div className="eyebrow-left">
        <div className="eyebrow-badge">
          <span>{slide.badge[0]}</span>
          <span>{slide.badge[1]}</span>
        </div>

        {/* 2. Alan: F5F5F5 metin bloğu */}
        <div className="eyebrow-text-block">
          <span className="eyebrow-title">{slide.title}</span>
          <span className="eyebrow-desc">{slide.desc}</span>
        </div>
      </div>

      {/* Slide göstergesi (noktalar) */}
      <div className="eyebrow-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`eyebrow-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* 3. Alan: E5E5E5 merkez */}
      <div className="eyebrow-center">
        <div className="eyebrow-text-block">
          <span className="eyebrow-title">{slide.centerTitle}</span>
          <span className="eyebrow-desc">{slide.centerDesc}</span>
        </div>
        <img src={slide.icon} alt={slide.iconAlt} className="eyebrow-icon" />
      </div>

      {/* 4. Alan: Turuncu CTA */}
      <a href="/iletisim" className="eyebrow-right">
        <span className="eyebrow-cta-label">İletişim</span>
        <span className="eyebrow-arrow">→</span>
      </a>

    </div>
  );
};

export default Eyebrow;
