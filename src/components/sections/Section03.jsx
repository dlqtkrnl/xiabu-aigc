import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Section03() {
  const { t } = useTranslation();

  return (
    <section id="section-03" className="flex-center">
      <div className="chapter-number">02</div>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            {t('s3.h2_en')} <span className="glow-text">{t('s3.h2_zh')}</span>
          </h2>
        </motion.div>

        {/* P5: 概念框架 */}
        <div style={{ marginBottom: '6rem' }}>
          <div className="slide-badge">{t('s3.p5_badge')}</div>
          <div className="slide-subtitle">{t('s3.p5_sub')}</div>
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s3.p5_t1') }} />
          
          <div className="content-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '3rem', marginBottom: '3rem' }}>
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--glass-border)', marginBottom: '1rem' }}>01</div>
              <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.3rem' }}>{t('s3.p5_layer1_title')}</h3>
              <p className="pt-text" style={{ fontSize: '1rem', flex: 1 }} dangerouslySetInnerHTML={{ __html: t('s3.p5_layer1_desc') }} />
              <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', textAlign: 'center', borderRadius: '4px' }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Understand Culture</strong>
              </div>
            </div>
            
            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', borderColor: 'var(--accent-color)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '1rem' }}>02</div>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.3rem' }}>{t('s3.p5_layer2_title')}</h3>
              <p className="pt-text" style={{ fontSize: '1rem', flex: 1 }} dangerouslySetInnerHTML={{ __html: t('s3.p5_layer2_desc') }} />
              <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'var(--accent-color)', color: '#000', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold' }}>
                <strong style={{ letterSpacing: '2px' }}>BRIDGE</strong>
              </div>
            </div>

            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--glass-border)', marginBottom: '1rem' }}>03</div>
              <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.3rem' }}>{t('s3.p5_layer3_title')}</h3>
              <p className="pt-text" style={{ fontSize: '1rem', flex: 1 }} dangerouslySetInnerHTML={{ __html: t('s3.p5_layer3_desc') }} />
              <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', textAlign: 'center', borderRadius: '4px' }}>
                <strong style={{ color: 'var(--text-secondary)' }}>Operate Physics</strong>
              </div>
            </div>
          </div>
          
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s3.p5_t2') }} />
          <div className="quote-block" dangerouslySetInnerHTML={{ __html: t('s3.p5_quote') }} />
        </div>

        <div className="page-divider"></div>

        {/* P6: 工作流程 */}
        <div>
          <div className="slide-badge">{t('s3.p6_badge')}</div>
          <div className="slide-subtitle">{t('s3.p6_sub')}</div>
          <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s3.p6_t1') }} />

          {/* Workflow Diagram */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem', marginBottom: '4rem', position: 'relative' }}>
            {/* Connecting line */}
            <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', background: 'var(--glass-border)', zIndex: 0 }}></div>
            
            {/* Step 1 */}
            <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-color)', padding: '1rem', textAlign: 'center', width: '22%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <span style={{ fontWeight: 'bold' }}>{t('s3.p6_step1_top')}</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: t('s3.p6_step1_bot') }} />
            </div>

            {/* Step 2 */}
            <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-color)', padding: '1rem', textAlign: 'center', width: '22%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', boxShadow: 'var(--accent-glow)' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('s3.p6_step2_top')}</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--accent-color)' }} dangerouslySetInnerHTML={{ __html: t('s3.p6_step2_bot') }} />
            </div>

            {/* Step 3 */}
            <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-color)', padding: '1rem', textAlign: 'center', width: '22%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <span style={{ fontWeight: 'bold' }}>{t('s3.p6_step3_top')}</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: t('s3.p6_step3_bot') }} />
            </div>

            {/* Step 4 */}
            <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-color)', padding: '1rem', textAlign: 'center', width: '22%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--glass-bg)', border: '2px solid var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--accent-color)' }}>{t('s3.p6_step4_top')}</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--accent-color)' }} dangerouslySetInnerHTML={{ __html: t('s3.p6_step4_bot') }} />
            </div>
          </div>

          <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '2rem', borderRadius: '8px' }}>
            <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s3.p6_t2') }} />
            <p className="pt-text" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: t('s3.p6_t3') }} />
          </div>
          
          <div className="quote-block" style={{ marginTop: '3rem' }} dangerouslySetInnerHTML={{ __html: t('s3.p6_quote') }} />
        </div>
      </div>
    </section>
  );
}
