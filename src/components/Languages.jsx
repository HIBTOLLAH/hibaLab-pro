import React from 'react';
import { Globe, Star } from 'lucide-react';

export function Languages({ languages, sections }) {
  return (
    <section id="languages" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="gradient-text">{sections.languagesTitle}</span>
        </h2>
      </div>

      <div className="languages-grid">
        {languages.map((lang, idx) => (
          <div key={idx} className="glass-card language-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Globe size={18} style={{ color: 'var(--accent-primary)' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{lang.name}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{lang.level}</p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>{lang.note}</div>
            </div>

            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  fill={i < lang.stars ? '#f59e0b' : 'none'} 
                  color={i < lang.stars ? '#f59e0b' : 'var(--text-dim)'} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
