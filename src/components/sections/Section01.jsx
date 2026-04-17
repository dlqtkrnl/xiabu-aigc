import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Section01() {
  const { t } = useTranslation();

  return (
    <section id="section-01" className="flex-center">
      <video
        className="hero-video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/media/从图案借用走向工艺语汇转译_李允耕.mp4" type="video/mp4" />
      </video>
      <div className="chapter-number">00</div>
      
      <div className="section-container" style={{ textAlign: 'center', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="slide-badge" style={{ marginBottom: '2rem' }}>{t('s1.badge')}</div>
          <div className="slide-subtitle glow-text">{t('s1.subtitle')}</div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '2rem', lineHeight: 1.3 }}>
            {t('s1.title_main')}<br/>
            <span style={{ fontSize: '2.2rem', color: 'var(--text-secondary)' }}>{t('s1.title_sub')}</span>
          </h1>
          
          <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--glass-border)', display: 'inline-block' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>{t('s1.author')}</p>
            <p style={{ color: 'var(--text-secondary)' }}>{t('s1.event')}</p>
          </div>
        </motion.div>
        
        <motion.div
          className="quote-block"
          style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'left', fontSize: '1.5rem', lineHeight: '1.6' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('s1.quote')}
        </motion.div>
      </div>
    </section>
  );
}
