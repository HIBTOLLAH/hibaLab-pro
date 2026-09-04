import React from 'react';
import { Github, Heart, Code2 } from 'lucide-react';

export function Footer({ personal, lang }) {
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '32px 24px', marginTop: '60px', textAlign: 'center', color: 'var(--text-muted)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: 'var(--text-main)' }}>
          <Code2 size={18} style={{ color: 'var(--accent-primary)' }} />
          <span>{personal.name}</span>
        </div>

        <p style={{ fontSize: '0.88rem' }}>
          {isAr 
            ? `جميع الحقوق محفوظة © ${new Date().getFullYear()}`
            : (isTr 
              ? `Tüm hakları saklıdır © ${new Date().getFullYear()}`
              : `All rights reserved © ${new Date().getFullYear()}`)}
        </p>

        <a 
          href={personal.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
        >
          <Github size={16} />
          <span>{isAr ? 'تابع أعمالي على GitHub' : (isTr ? 'GitHub üzerindeki projelerim' : 'Follow my work on GitHub')}</span>
        </a>
      </div>
    </footer>
  );
}
