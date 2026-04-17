import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function SlideCaseStudyMain() {
  return (
    <div className="slide-content">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        主案例：轻透 (Transparency and Rhythm)
      </motion.h2>

      <div style={{ display: 'flex', gap: '3rem', flex: 1, height: '100%' }}>
        {/* Left Side: Video Output */}
        <motion.div 
          className="glass-panel"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, overflow: 'hidden' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.3rem' }}>CLO 3D 数字样衣验证 (动态生成)</h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Play size={16} /> 动态验证
            </span>
          </div>
          <div style={{ flex: 1, position: 'relative', backgroundColor: '#000' }}>
            <video 
              controls
              autoPlay
              loop
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/media/1分钟宣传视频.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Right Side: Translation Logic */}
        <motion.div 
          style={{ width: '35%', display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-panel" style={{ borderLeft: '4px solid #fff' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>STEP 1 : 来源图</h4>
            <h3 style={{ fontSize: '1.2rem' }}>夏布绣的透明底布与线性刺绣</h3>
          </div>
          
          <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-color)' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>STEP 2 : 逻辑提取</h4>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>透明性 / 线律动 / 留白</h3>
          </div>
          
          <div className="glass-panel" style={{ borderLeft: '4px solid #fff' }}>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>STEP 3 : 针织样片</h4>
            <h3 style={{ fontSize: '1.2rem' }}>网眼、线性组织和镂空</h3>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              “这不是一件‘像夏布绣’的衣服。<br />
              而是：夏布绣的透明基底、线性骨架和负形关系，怎样在针织里被重新组织起来。”
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
