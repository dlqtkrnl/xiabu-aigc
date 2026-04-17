import React from 'react';
import { motion } from 'framer-motion';

export default function SlideTitle() {
  return (
    <div className="slide-content centered">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.3
        }}
      >
        <source src="/media/1分钟宣传视频.mp4" type="video/mp4" />
      </video>

      <motion.div 
        className="glass-panel"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ maxWidth: '800px' }}
      >
        <motion.h2 
          className="slide-subtitle text-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          艺术与科技：AI时代的艺术理论与实践
        </motion.h2>
        
        <motion.h1 
          className="slide-title"
          style={{ fontSize: '3rem', marginBottom: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          生成式AI驱动的非遗工艺语汇转译<br />
          <span style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>——以江西夏布绣启发的针织设计为例</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ marginTop: '3rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}
        >
          <p style={{ fontSize: '1.2rem', fontWeight: 300 }}>
            服装设计学院 | 李允耕
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            南昌市轻工业产品人工智能制造重点实验室学术论坛
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
