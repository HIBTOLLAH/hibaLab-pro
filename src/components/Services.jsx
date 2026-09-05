import React from 'react';
import { Sparkles, MessageSquare, ArrowLeft, ArrowRight, Code2 } from 'lucide-react';

export function Services({ sections, lang, onOpenContact }) {
  const isAr = lang === 'ar';
  const isTr = lang === 'tr';

  const getSingleParagraph = () => {
    if (isAr) {
      return "أقدم حلولاً هندسية وتجارية متكاملة تجمع بين تطوير تطبيقات الويب الحديثة (Full Stack) باستخدام React.js وNode.js وFirebase، وتطوير وتخصيص أنظمة إدارة الموارد للمؤسسات والمصانع (ERP & .NET) وقواعد البيانات SQL مع تتبع خطوط الإنتاج والتحول الرقمي. كما أقدم خدمات تطوير الأعمال الدولية وإدارة المبيعات B2B في منطقتي الشرق الأوسط وأفريقيا، إلى جانب دمج حلول الذكاء الاصطناعي ومعالجة الصوت (Speech-to-Text) بلغة Python، وبناء المنصات والمتاجر الإلكترونية وتقديم الاستشارات التقنية الشاملة لبناء بنيّة برمجية وتجارية متكاملة وقابلة للتوسع.";
    }
    if (isTr) {
      return "React.js, Node.js ve Firebase teknolojileriyle modern web uygulamaları (Full Stack) geliştirme; .NET ve SQL altyapısıyla kurumsal ERP sistemleri, dijital fabrika ve üretim hattı izlenebilirlik çözümlerinin sunulması; MENA ve Afrika bölgelerinde uluslararası iş geliştirme ve B2B satış yönetimi; Python tabanlı yapay zekâ ve ses işleme (Speech-to-Text) uygulamaları entegrasyonu; e-ticaret platformları ve teknik danışmanlık hizmetlerini kapsayan uçtan uca çözümler sunuyorum.";
    }
    return "Delivering integrated engineering and commercial solutions bridging Full Stack web application development (React.js, Node.js, Firebase), Enterprise ERP & .NET module engineering with SQL database architecture and digital factory traceability, alongside regional business development and B2B sales across MENA & Africa, Python AI speech processing integration (Speech-to-Text), custom e-commerce platforms, and high-level technical architecture consulting.";
  };

  const getButtonText = () => {
    if (isAr) return 'طلب خدمة / تواصل مباشر';
    if (isTr) return 'Hizmet Talebi / İletişim';
    return 'Request Service / Contact';
  };

  return (
    <section id="services" className="section">
      <div className="section-header">
        <h2 className="section-title">
          <Sparkles size={22} style={{ color: 'var(--accent-primary)' }} />
          <span>{sections.servicesTitle}</span>
        </h2>
        <p className="section-subtitle">{sections.servicesSubtitle}</p>
      </div>

      {/* SINGLE UNIFIED PARAGRAPH BLOCK */}
      <div className="glass-card single-services-card">
        <div className="services-single-icon-badge">
          <Code2 size={22} />
        </div>

        <p className="services-unified-text">
          {getSingleParagraph()}
        </p>

        <div className="services-single-footer no-print">
          <button className="btn btn-primary" onClick={onOpenContact}>
            <MessageSquare size={16} />
            <span>{getButtonText()}</span>
            {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
