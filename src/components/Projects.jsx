import React from 'react';
import { FolderGit2, ExternalLink, Boxes, Globe, ShoppingBag, Sparkles, Layers } from 'lucide-react';

export function Projects({ projects, sections, lang }) {
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  const getBadgeIcon = (badge) => {
    if (badge.includes('ERP')) return <Boxes size={14} />;
    if (badge.includes('Commerce') || badge.includes('Ticaret')) return <ShoppingBag size={14} />;
    return <Layers size={14} />;
  };

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <FolderGit2 size={32} style={{ color: 'var(--accent-primary)' }} />
          <span className="gradient-text">{sections.projectsTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.projectsSubtitle}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            className="glass-card" 
            style={{ 
              padding: '28px', 
              display: 'flex', 
              flexDirection: 'column', 
              justify: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <div className="badge" style={{ fontSize: '0.95rem', padding: '6px 14px' }}>
                  {getBadgeIcon(proj.badge)}
                  <span>{proj.badge}</span>
                </div>
                <span style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: '700' }}>
                  {proj.category}
                </span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text-main)' }}>
                {proj.title}
              </h3>

              <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', lineHeight: '1.75', marginBottom: '20px', fontWeight: '500' }}>
                {proj.description}
              </p>
            </div>

            <div>
              <div className="tech-tags" style={{ marginTop: '0', marginBottom: proj.website ? '16px' : '0' }}>
                {proj.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {proj.website && (
                <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                  <a 
                    href={proj.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>{isAr ? 'معاينة المشروع' : (isTr ? 'Projeyi İncele' : 'View Project Website')}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
