import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Section06() {
  const { t } = useTranslation();

  return (
    <section id="section-06" className="flex-center">
      <div className="chapter-number">05</div>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            {t('s6.h2_en')} <span className="glow-text">{t('s6.h2_zh')}</span>
          </h2>
        </motion.div>

        {/* P12: 结论与贡献 */}
        <div style={{ marginBottom: '8rem' }}>
          <div className="slide-badge">{t('s6.p12_badge')}</div>
          <div className="slide-subtitle">{t('s6.p12_sub')}</div>
          
          <p className="pt-text" style={{ fontSize: '1.2rem' }} dangerouslySetInnerHTML={{ __html: t('s6.p12_t1') }} />
          <div className="grid-3" style={{ marginTop: '3rem' }}>
            <div className="step-card active-step">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{t('s6.p12_card1_title')}</h3>
              <p className="pt-text" style={{ fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: t('s6.p12_card1_desc') }} />
            </div>
            <div className="step-card active-step">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{t('s6.p12_card2_title')}</h3>
              <p className="pt-text" style={{ fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: t('s6.p12_card2_desc') }} />
            </div>
            <div className="step-card active-step">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{t('s6.p12_card3_title')}</h3>
              <p className="pt-text" style={{ fontSize: '0.95rem' }} dangerouslySetInnerHTML={{ __html: t('s6.p12_card3_desc') }} />
            </div>
          </div>
          
          <div className="glass-panel" style={{ marginTop: '3rem', borderStyle: 'dashed' }}>
             <h3 style={{ marginBottom: '1rem' }}>{t('s6.p12_limit_title')}</h3>
             <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s6.p12_limit_desc') }} />
          </div>
          
          <div className="quote-block" style={{ fontSize: '1.6rem', lineHeight: 1.8, marginTop: '4rem' }} dangerouslySetInnerHTML={{ __html: t('s6.p12_quote') }} />
        </div>

        <div className="page-divider"></div>

        {/* P13: 参考文献 / 结束 */}
        <div style={{ paddingTop: '4rem' }}>
          <div className="slide-badge">{t('s6.p13_badge')}</div>
          <div className="slide-subtitle">{t('s6.p13_sub')}</div>
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s6.p13_t1') }} />
          
          <div className="grid-3" style={{ marginTop: '3rem', marginBottom: '4rem', alignItems: 'start' }}>
            {/* Class 1 */}
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1rem', letterSpacing: '1px' }}>{t('s6.p13_ref1_title')}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: 1.6 }}>
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref1_1') }} />
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref1_2') }} />
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref1_3') }} />
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref1_4') }} />
              </ul>
            </div>
            
             {/* Class 2 */}
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1rem', letterSpacing: '1px' }}>{t('s6.p13_ref2_title')}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: 1.6 }}>
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref2_1') }} />
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref2_2') }} />
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref2_3') }} />
              </ul>
            </div>

             {/* Class 3 */}
            <div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', fontSize: '1rem', letterSpacing: '1px' }}>{t('s6.p13_ref3_title')}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', lineHeight: 1.6 }}>
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref3_1') }} />
                <li dangerouslySetInnerHTML={{ __html: t('s6.p13_ref3_2') }} />
              </ul>
            </div>
          </div>
          
          <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p className="pt-text" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 4rem' }} dangerouslySetInnerHTML={{ __html: t('s6.p13_desc') }} />
            
            <h1 style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.05)', marginBottom: '1rem' }}>
              {t('s6.p13_thanks')}
            </h1>
            <p style={{ color: 'var(--accent-color)', fontSize: '1.2rem', letterSpacing: '2px' }} dangerouslySetInnerHTML={{ __html: t('s6.p13_end') }} />
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--glass-border)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{t('s6.p13_summary_title')}</p>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
              <span dangerouslySetInnerHTML={{ __html: t('s6.p13_summary_1') }} />
              <span dangerouslySetInnerHTML={{ __html: t('s6.p13_summary_2') }} />
              <span dangerouslySetInnerHTML={{ __html: t('s6.p13_summary_3') }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
