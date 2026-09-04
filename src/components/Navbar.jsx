import React from 'react';
import { Globe, Printer, MessageSquareShare, Code } from 'lucide-react';

export function Navbar({ lang, setLang, navData, onOpenContact }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="badge brand-badge">
            <Code size={16} />
          </div>
          <span className="brand-title">hibtollahLab</span>
        </div>

        <ul className="nav-links">
          <li><a href="#about" className="nav-link">{navData.about}</a></li>
          <li><a href="#experience" className="nav-link">{navData.experience}</a></li>
          <li><a href="#projects" className="nav-link">{navData.projects}</a></li>
          <li><a href="#education" className="nav-link">{navData.education}</a></li>
        </ul>

        <div className="nav-controls">
          {/* Language Switcher */}
          <div className="lang-switcher">
            <Globe size={14} className="lang-globe-icon" />
            <button 
              className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
              onClick={() => setLang('ar')}
              title="العربية"
            >
              ع
            </button>
            <button 
              className={`lang-btn ${lang === 'tr' ? 'active' : ''}`}
              onClick={() => setLang('tr')}
              title="Türkçe"
            >
              TR
            </button>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Print PDF */}
          <button className="btn btn-secondary nav-print-btn" onClick={handlePrint} title={navData.printPdf}>
            <Printer size={16} />
            <span className="no-mobile">{navData.printPdf}</span>
          </button>

          {/* Contact Button */}
          <button className="btn btn-primary nav-contact-btn" onClick={onOpenContact}>
            <MessageSquareShare size={16} />
            <span>{navData.contact}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
