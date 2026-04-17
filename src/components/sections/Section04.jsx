import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Section04() {
  const { t } = useTranslation();

  return (
    <section id="section-04" className="flex-center">
      <div className="chapter-number">03</div>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="slide-title">
            {t('s4.h2_en')} <span className="glow-text">{t('s4.h2_zh')}</span>
          </h2>
        </motion.div>

        {/* P7: 案例总览 */}
        <div style={{ marginBottom: '8rem' }}>
          <div className="slide-badge">{t('s4.p7_badge')}</div>
          <div className="slide-subtitle">{t('s4.p7_sub')}</div>
          
          <div className="content-grid" style={{ gap: '3rem', alignItems: 'start' }}>
            <div>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p7_t1') }} />
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p7_t2') }} />
              
              <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderColor: 'var(--accent-color)' }}>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t('s4.p7_case1')}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{t('s4.p7_case1_desc')}</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t('s4.p7_case2')}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{t('s4.p7_case2_desc')}</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t('s4.p7_case3')}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{t('s4.p7_case3_desc')}</p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '1rem' }}>
              <div style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '0.9rem', letterSpacing: '1px' }}>
                {t('s4.p7_video_title')}
              </div>
              <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                <video
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/media/从图案借用走向工艺语汇转译_李允耕.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        <div className="page-divider"></div>

        {/* P8: 案例一：轻透 */}
        <div style={{ marginBottom: '8rem' }}>
          <div className="slide-badge">{t('s4.p8_badge')}</div>
          <div className="slide-subtitle">{t('s4.p8_sub')}</div>
          
          <div className="content-grid" style={{ alignItems: 'center' }}>
            <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/media/夏布绣参考.jpg" alt="夏布绣参考" style={{ width: '100%', display: 'block' }} />
            </div>
            <div>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p8_t1') }} />
              <div style={{ background: 'var(--bg-color-alt)', padding: '2rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)' }}>
                <p className="pt-text" style={{ fontSize: '1rem', marginBottom: 0, lineHeight: 2 }} dangerouslySetInnerHTML={{ __html: t('s4.p8_t2') }} />
              </div>
            </div>
          </div>
          <div className="quote-block" dangerouslySetInnerHTML={{ __html: t('s4.p8_quote') }} />
        </div>

        <div className="page-divider"></div>

        {/* P9: 案例二：经纬 */}
        <div style={{ marginBottom: '8rem' }}>
          <div className="slide-badge">{t('s4.p9_badge')}</div>
          <div className="slide-subtitle">{t('s4.p9_sub')}</div>
          
          <div className="content-grid" style={{ alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>{t('s4.p9_box_title')}</h3>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p9_t1') }} />
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p9_t2') }} />
            </div>
            <div>
              <div className="glass-panel" style={{ padding: '0.5rem', marginBottom: '2rem', display: 'flex', gap: '0.5rem' }}>
                 <img src="/media/万载土布.jpg" alt="源图像：万载土布" style={{ width: '33%', objectFit: 'cover', borderRadius: '4px' }} />
                 <img src="/media/像素采样.jpg" alt="像素采样中间过程" style={{ width: '33%', objectFit: 'cover', borderRadius: '4px' }} />
                 <img src="/media/嵌花样片.jpg" alt="嵌花样片" style={{ width: '33%', objectFit: 'cover', borderRadius: '4px' }} />
              </div>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p9_t3') }} />
            </div>
          </div>
          <div className="quote-block" dangerouslySetInnerHTML={{ __html: t('s4.p9_quote') }} />
        </div>

        <div className="page-divider"></div>

        {/* P10: 案例三：缝线 */}
        <div>
          <div className="slide-badge">{t('s4.p10_badge')}</div>
          <div className="slide-subtitle">{t('s4.p10_sub')}</div>
          
          <div className="content-grid" style={{ alignItems: 'center' }}>
            <div>
              <div className="glass-panel" style={{ padding: '0.5rem', marginBottom: '2rem', display: 'flex', gap: '0.5rem' }}>
                 <img src="/media/赣发绣.jpg" alt="源图像：赣发绣" style={{ width: '50%', objectFit: 'cover', borderRadius: '4px' }} />
                 <div style={{ width: '50%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <img src="/media/修补语义.jpg" alt="提花生成" style={{ width: '100%', height: '50%', objectFit: 'cover', borderRadius: '4px' }} />
                   <img src="/media/双色提花验证.jpg" alt="双色提花结构" style={{ width: '100%', height: '50%', objectFit: 'cover', borderRadius: '4px' }} />
                 </div>
              </div>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p10_t3') }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>{t('s4.p10_box_title')}</h3>
              <p className="pt-text" dangerouslySetInnerHTML={{ __html: t('s4.p10_t1') }} />
              <div style={{ background: 'var(--bg-color-alt)', padding: '2rem', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)', marginTop: '2rem' }}>
                <p className="pt-text" style={{ fontSize: '1rem', marginBottom: 0, lineHeight: 2 }} dangerouslySetInnerHTML={{ __html: t('s4.p10_t2') }} />
              </div>
            </div>
          </div>
          <div className="quote-block" dangerouslySetInnerHTML={{ __html: t('s4.p10_quote') }} />
        </div>

      </div>
    </section>
  );
}
