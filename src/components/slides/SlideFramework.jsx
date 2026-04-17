import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function SlideFramework() {
  const steps = [
    { title: "文化语义层", subtitle: "先理解文化", desc: "透明底布、线条韵律、留白美学" },
    { title: "材料逻辑层", subtitle: "再提炼逻辑", desc: "透明性、线律动、负形" },
    { title: "针织参数层", subtitle: "最后实现技术", desc: "网眼、线性组织、镂空针距" }
  ];

  return (
    <div className="slide-content centered">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        概念框架：三层转译模型
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginTop: '2rem' }}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div 
              className="glass-panel"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              style={{ width: '600px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 3rem' }}
            >
              <div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{step.subtitle}</p>
              </div>
              <div style={{ textAlign: 'right', fontSize: '1.1rem', fontWeight: 300 }}>
                {step.desc}
              </div>
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5, delay: (index * 0.5) + 0.5 }}
              >
                <ArrowDown size={32} color="var(--text-secondary)" style={{ margin: '0.5rem 0' }} />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ marginTop: '3rem' }}
      >
        <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)' }}>
          "很多非遗设计容易从文化直接跳到视觉模仿，中间缺少一个可以落地的桥。"
        </p>
      </motion.div>
    </div>
  );
}
