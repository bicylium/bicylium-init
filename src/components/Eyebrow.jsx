import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import gearIcon from '../../icons/vites-degistirici.svg';
import bisikletIcon from '../../icons/bisiklet.svg';
import liraIcon from '../../icons/turk-lirasi-guven.svg';
import './Eyebrow.css';

const SLIDES = [
  {
    badge: ['eyebrow.slide1Badge1', 'eyebrow.slide1Badge2'],
    title: 'eyebrow.slide1Title',
    desc: 'eyebrow.slide1Desc',
    centerTitle: 'eyebrow.slide1CenterTitle',
    centerDesc: 'eyebrow.slide1CenterDesc',
    icon: gearIcon,
    iconAlt: 'eyebrow.slide1IconAlt',
  },
  {
    badge: ['eyebrow.slide2Badge1', 'eyebrow.slide2Badge2'],
    title: 'eyebrow.slide2Title',
    desc: 'eyebrow.slide2Desc',
    centerTitle: 'eyebrow.slide2CenterTitle',
    centerDesc: 'eyebrow.slide2CenterDesc',
    icon: bisikletIcon,
    iconAlt: 'eyebrow.slide2IconAlt',
  },
  {
    badge: ['eyebrow.slide3Badge1', 'eyebrow.slide3Badge2'],
    title: 'eyebrow.slide3Title',
    desc: 'eyebrow.slide3Desc',
    centerTitle: 'eyebrow.slide3CenterTitle',
    centerDesc: 'eyebrow.slide3CenterDesc',
    icon: liraIcon,
    iconAlt: 'eyebrow.slide3IconAlt',
  },
];

const Eyebrow = () => {
  const { t } = useTranslation();
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
          <span>{t(slide.badge[0])}</span>
          <span>{t(slide.badge[1])}</span>
        </div>

        {/* 2. Alan: F5F5F5 metin bloğu */}
        <div className="eyebrow-text-block">
          <span className="eyebrow-title">{t(slide.title)}</span>
          <span className="eyebrow-desc">{t(slide.desc)}</span>
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
          <span className="eyebrow-title">{t(slide.centerTitle)}</span>
          <span className="eyebrow-desc">{t(slide.centerDesc)}</span>
        </div>
        <img src={slide.icon} alt={t(slide.iconAlt)} className="eyebrow-icon" />
      </div>

      {/* 4. Alan: Turuncu CTA */}
      <a href="/iletisim" className="eyebrow-right">
        <span className="eyebrow-cta-label">{t('eyebrow.contact')}</span>
        <span className="eyebrow-arrow">→</span>
      </a>

    </div>
  );
};

export default Eyebrow;
