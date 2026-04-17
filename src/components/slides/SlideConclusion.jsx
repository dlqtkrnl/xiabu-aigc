import React from 'react';
import { motion } from 'framer-motion';

export default function SlideConclusion() {
  const points = [
    "它提出了一个三层转译模型。从文化语义，到材料逻辑，再到针织参数。",
    "它建立了一个闭环流程。让LLM、AIGC、CLO 3D和专家复核变成一条完整的方法链。",
    "它提供了一种教学上的可能。将文化研究、设计生成与数字样衣放到同一个训练框架里。"
  ];

  return (
    <div className="slide-content centered">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        结论与贡献
      </motion.h2>

      <motion.div 
        className="glass-panel"
        style={{ width: '800px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem', padding: '4rem' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {points.map((point, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + (index * 0.3) }}
            style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
          >
            <div style={{ color: 'var(--accent-color)', fontSize: '1.5rem', fontWeight: 'bold' }}>{index + 1}.</div>
            <div style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>{point}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ marginTop: '4rem' }}
      >
        <h3 className="text-gradient" style={{ fontSize: '1.8rem', fontStyle: 'italic' }}>
          "非遗最怕的，不是看不见。非遗最怕的是，最后只剩下一个图案。<br/>
          我真正想做的，是让它带着自己的工艺语汇、材料逻辑和文化语义，在今天继续生长。"
        </h3>
      </motion.div>
    </div>
  );
}
