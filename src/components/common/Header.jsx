import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header({ activeSection }) {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navItems = [
    { id: 'section-01', label: t('nav.cover') },
    { id: 'section-02', label: t('nav.problem') },
    { id: 'section-03', label: t('nav.framework') },
    { id: 'section-04', label: t('nav.cases') },
    { id: 'section-05', label: t('nav.evaluation') },
    { id: 'section-06', label: t('nav.conclusion') },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="header-nav">
      <div style={{ fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.1em' }}>
        AIGC <span style={{ color: 'var(--accent-color)' }}>FASHION</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <div className="nav-links">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <select 
          value={i18n.language} 
          onChange={handleLanguageChange}
          style={{
            background: 'transparent',
            color: 'var(--text-secondary)',
            border: '1px solid var(--glass-border)',
            padding: '0.3rem 0.6rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            outline: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
        >
          <option value="zh" style={{ background: '#111' }}>中文 (CN)</option>
          <option value="ko" style={{ background: '#111' }}>한국어 (KO)</option>
          <option value="en" style={{ background: '#111' }}>English (EN)</option>
        </select>
      </div>
    </nav>
  );
}
