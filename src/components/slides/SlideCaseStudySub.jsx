import React from 'react';
import { motion } from 'framer-motion';

export default function SlideCaseStudySub() {
  const images = [
    { src: '/media/01.jpeg', label: '经纬: 格网记忆' },
    { src: '/media/02.jpeg', label: '经纬: 像素秩序' },
    { src: '/media/03.jpeg', label: '缝线: 修补语义' },
    { src: '/media/04.jpeg', label: '缝线: 结构边界' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="slide-content">
      <motion.h2 
        className="slide-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        辅助案例：经纬与缝线 (Grid and Suture)
      </motion.h2>

      <motion.div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          flex: 1,
          marginTop: '2rem'
        }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', cursor: 'pointer' }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
          >
            <img 
              src={img.src} 
              alt={img.label} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: '1.5rem 1rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 500
            }}>
              {img.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ marginTop: '2rem', textAlign: 'center' }}
      >
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          "真正的深层转译，有时候不是保留原来的形，而是重写原来的结构关系。"
        </p>
      </motion.div>
    </div>
  );
}
