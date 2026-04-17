import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Section02() {
  const { t } = useTranslation();

  return (
    <section id="section-02" className="flex-center">
      <div className="chapter-number">01</div>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            {t('s2.h2_en')} <span className="glow-text">{t('s2.h2_zh')}</span>
          </h2>
        </motion.div>

        {/* P2: 问题陈述 */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="slide-badge">{t('s2.p2_badge')}</div>
          <div className="slide-subtitle">{t('s2.p2_sub')}</div>
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p2_t1') }} />
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p2_t2') }} />
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p2_t3') }} />

          <div style={{ marginTop: '2rem', padding: '1.5rem', borderLeft: '3px solid var(--accent-color)', background: 'var(--glass-bg)' }}>
            <p className="pt-text" style={{ fontStyle: 'italic', margin: 0 }} dangerouslySetInnerHTML={{ __html: t('s2.p2_quote') }} />
          </div>

          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="glass-panel" style={{ opacity: 0.5, borderStyle: 'dashed' }}>
              <h3 style={{ textAlign: 'center' }}>{t('s2.p2_card1')}</h3>
            </div>
            <div className="glass-panel">
              <h3 style={{ textAlign: 'center', color: 'var(--accent-color)' }}>{t('s2.p2_card2')}</h3>
            </div>
            <div className="glass-panel">
              <h3 style={{ textAlign: 'center', color: 'var(--accent-color)' }}>{t('s2.p2_card3')}</h3>
            </div>
          </div>
        </div>

        <div className="page-divider"></div>

        {/* P3: 文献流向 */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="slide-badge">{t('s2.p3_badge')}</div>
          <div className="slide-subtitle">{t('s2.p3_sub')}</div>
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p3_t1') }} />
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p3_t2') }} />
          
          <div className="grid-3" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <div className="step-card active-step">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '1.2rem' }}>{t('s2.p3_path1_title')}</h3>
              <p className="pt-text" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>{t('s2.p3_path1_sub')}</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8 }}>
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path1_li1')}` }} />
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path1_li2')}` }} />
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path1_li3')}` }} />
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path1_li4')}` }} />
              </ul>
            </div>
            <div className="step-card active-step">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '1.2rem' }}>{t('s2.p3_path2_title')}</h3>
              <p className="pt-text" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>{t('s2.p3_path2_sub')}</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8 }}>
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path2_li1')}` }} />
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path2_li2')}` }} />
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path2_li3')}` }} />
              </ul>
            </div>
            <div className="step-card active-step">
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '1.2rem' }}>{t('s2.p3_path3_title')}</h3>
              <p className="pt-text" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 0 }}>{t('s2.p3_path3_sub')}</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '1rem', lineHeight: 1.8 }}>
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path3_li1')}` }} />
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path3_li2')}` }} />
                <li dangerouslySetInnerHTML={{ __html: `• ${t('s2.p3_path3_li3')}` }} />
              </ul>
            </div>
          </div>
          
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p3_t3') }} />
          <div className="quote-block" dangerouslySetInnerHTML={{ __html: t('s2.p3_quote') }} />
        </div>

        <div className="page-divider"></div>

        {/* P4: 问题诊断 */}
        <div>
          <div className="slide-badge">{t('s2.p4_badge')}</div>
          <div className="slide-subtitle">{t('s2.p4_sub')}</div>
          
          <div className="content-grid" style={{ marginTop: '3rem' }}>
            <div className="glass-panel">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>{t('s2.p4_box1_title')}</h3>
              <ul style={{ listStyle: 'none', paddingLeft: 0, gap: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <li className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p4_box1_li1') }} />
                <li className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p4_box1_li2') }} />
                <li className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p4_box1_li3') }} />
              </ul>
            </div>
            <div className="glass-panel" style={{ border: '1px solid var(--accent-color)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>{t('s2.p4_box2_title')}</h3>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s2.p4_box2_desc') }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem 0' }}>
                <div className="step-card active-step" style={{ padding: '1rem', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {t('s2.p4_box2_li1')}
                </div>
                <div style={{ textAlign: 'center', color: 'var(--accent-color)' }}>+</div>
                <div className="step-card active-step" style={{ padding: '1rem', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {t('s2.p4_box2_li2')}
                </div>
                <div style={{ textAlign: 'center', color: 'var(--accent-color)' }}>+</div>
                <div className="step-card active-step" style={{ padding: '1rem', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {t('s2.p4_box2_li3')}
                </div>
              </div>
              <p className="pt-text glow-text" style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: t('s2.p4_box2_quote') }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
