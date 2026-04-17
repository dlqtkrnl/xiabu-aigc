import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Section05() {
  const { t } = useTranslation();

  return (
    <section id="section-05" className="flex-center">
      <div className="chapter-number">04</div>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            {t('s5.h2_en')} <span className="glow-text">{t('s5.h2_zh')}</span>
          </h2>
        </motion.div>

        {/* P11: 评价矩阵 */}
        <div>
          <div className="content-grid" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="slide-badge">{t('s5.p11_badge')}</div>
              <div className="slide-subtitle">{t('s5.p11_sub')}</div>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s5.p11_t1') }} />
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s5.p11_t2') }} />
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s5.p11_t3') }} />
              <div className="quote-block" style={{ margin: '2rem 0', fontSize: '1.2rem' }} dangerouslySetInnerHTML={{ __html: t('s5.p11_quote1') }} />
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('s5.p11_dim1_title')}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{t('s5.p11_dim1_desc')}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('s5.p11_dim2_title')}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{t('s5.p11_dim2_desc')}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('s5.p11_dim3_title')}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{t('s5.p11_dim3_desc')}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('s5.p11_dim4_title')}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{t('s5.p11_dim4_desc')}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('s5.p11_dim5_title')}</div>
                  <div style={{ color: 'var(--text-secondary)' }}>{t('s5.p11_dim5_desc')}</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '6rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center' }}>{t('s5.p11_ai_title')}</h3>
            <p className="pt-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }} dangerouslySetInnerHTML={{ __html: t('s5.p11_ai_desc') }} />
            
            <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div className="glass-panel" style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '2px' }}>{t('s5.p11_ai_role1_title')}</div>
                <p style={{ color: 'var(--text-secondary)' }} dangerouslySetInnerHTML={{ __html: t('s5.p11_ai_role1_desc') }} />
              </div>
              <div className="glass-panel" style={{ textAlign: 'center', borderColor: 'var(--accent-color)' }}>
                <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent-color)', color: '#000', borderRadius: '20px', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: 'bold' }}>{t('s5.p11_ai_role2_title')}</div>
                <p style={{ color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: t('s5.p11_ai_role2_desc') }} />
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <p className="pt-text glow-text" style={{ fontSize: '1.2rem', fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: t('s5.p11_ai_quote') }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
