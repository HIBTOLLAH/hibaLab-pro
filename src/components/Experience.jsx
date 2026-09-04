import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight, ChevronLeft, Sparkles, Filter, ExternalLink } from 'lucide-react';

export function Experience({ experiences, sections, lang }) {
  const [filter, setFilter] = useState('all');
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  const filteredExperiences = experiences.filter(exp => {
    if (filter === 'all') return true;
    if (filter === 'software') return exp.type === 'software';
    if (filter === 'business') return exp.type === 'business-tech';
    return true;
  });

  return (
    <section id="experience" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="gradient-text">{sections.experienceTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.experienceSubtitle}</p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
        <button 
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('all')}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          <Filter size={16} />
          <span>{isAr ? 'جميع الخبرات' : (isTr ? 'Tüm Deneyimler' : 'All Experience')}</span>
        </button>
        <button 
          className={`btn ${filter === 'software' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('software')}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          <span>{isAr ? 'تطوير البرمجيات (Full Stack)' : (isTr ? 'Yazılım Geliştirme' : 'Software Development (Full Stack)')}</span>
        </button>
        <button 
          className={`btn ${filter === 'business' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setFilter('business')}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          <span>{isAr ? 'أنظمة ERP وتطوير الأعمال' : (isTr ? 'ERP Sistemleri & İş Geliştirme' : 'ERP Systems & Business Dev')}</span>
        </button>
      </div>

      <div className="timeline">
        {filteredExperiences.map((exp) => (
          <div key={exp.id} className="glass-card timeline-card">
            <div className="timeline-header">
              <div>
                <div className="badge" style={{ marginBottom: '8px', fontSize: '0.95rem', padding: '6px 14px' }}>
                  <Briefcase size={15} />
                  <span>{exp.badge}</span>
                </div>
                <h3 className="timeline-title">{exp.role}</h3>
                <div className="timeline-company" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Building2 size={18} />
                  {exp.website ? (
                    <a 
                      href={exp.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '700' }}
                    >
                      <span>{exp.company}</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span>{exp.company}</span>
                  )}
                </div>
              </div>

              <div style={{ textAlign: 'start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '4px', fontWeight: '600' }}>
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)', fontSize: '0.95rem' }}>
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-main)', fontSize: '1.18rem', marginBottom: '16px', fontWeight: '600', lineHeight: '1.8' }}>
              {exp.description}
            </p>

            <ul className="timeline-highlights">
              {exp.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="tech-tags" style={{ marginBottom: exp.website ? '16px' : '0' }}>
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {exp.website && (
              <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '1.05rem', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>{isAr ? 'زيارة موقع الشركة الرسمي' : (isTr ? 'Resmi Şirket Web Sitesi' : 'Visit Company Website')}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
