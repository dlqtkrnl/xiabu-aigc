import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cuboid, Globe } from 'lucide-react';

export default function SlideStatement() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className="slide-content">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        问题陈述：为什么不能只做图案借用？
      </motion.h2>

      <div style={{ display: 'flex', gap: '2rem', flex: 1, alignItems: 'center' }}>
        <motion.div 
          className="glass-panel"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '4px solid var(--accent-color)' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>传统的局限：仅剩的图案</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
            因为最容易获取，也最容易流失。<br/>
            一旦只剩表面的“形”，传统工艺最深层的美学秩序与材料特性便荡然无存。
          </p>
        </motion.div>

        <motion.div 
          style={{ flex: 2, display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            { title: "图案复制", icon: <Layers size={40} />, color: "#ff6b6b" },
            { title: "材料逻辑转译", icon: <Cuboid size={40} />, color: "#4ecdc4" },
            { title: "文化语义保留", icon: <Globe size={40} />, color: "#feca57" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="glass-panel" 
              variants={itemVariants}
              style={{ flex: 1, textAlign: 'center', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderTop: `4px solid ${item.color}` }}
            >
              <div style={{ color: item.color, marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.4rem' }}>{item.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '2rem' }}
      >
        <h3 className="text-gradient" style={{ fontSize: '2rem', fontStyle: 'italic' }}>
          "不是复制图案，而是转译逻辑。"
        </h3>
      </motion.div>
    </div>
  );
}
