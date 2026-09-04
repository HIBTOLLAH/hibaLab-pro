import React from 'react';
import { 
  Code2, FileCode, Layout, Smartphone, Server, Cpu, Terminal, 
  Layers, Database, Flame, GitBranch, Boxes, Globe, Users, 
  LineChart, CheckCircle2, Wrench, Sparkles 
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  FileCode: FileCode,
  Layout: Layout,
  Smartphone: Smartphone,
  Server: Server,
  Cpu: Cpu,
  Terminal: Terminal,
  Layers: Layers,
  Database: Database,
  Flame: Flame,
  GitBranch: GitBranch,
  Boxes: Boxes,
  Globe: Globe,
  Users: Users,
  LineChart: LineChart,
  CheckCircle2: CheckCircle2
};

export function Skills({ categories, sections }) {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="gradient-text">{sections.skillsTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.skillsSubtitle}</p>
      </div>

      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-card skill-category-card">
            <h3 className="skill-category-title">
              <Wrench size={20} />
              <span>{cat.category}</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cat.skills.map((skill, sIdx) => {
                const IconComponent = iconMap[skill.icon] || Sparkles;
                return (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)' }}>
                        <IconComponent size={16} style={{ color: 'var(--accent-primary)' }} />
                        {skill.name}
                      </span>
                      <span style={{ color: 'var(--accent-secondary)' }}>{skill.level}%</span>
                    </div>

                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
