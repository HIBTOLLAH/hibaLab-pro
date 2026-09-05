import React, { useEffect, useState } from 'react';

export function TechBackground() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="tech-bg-container no-print" aria-hidden="true">
      {/* Soothing Dynamic Mouse Glow Follower */}
      <div
        className="mouse-glow-follower"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Cybernetic Grid Blueprint Background */}
      <div className="tech-grid-overlay" />

      {/* Radiant Ambient Gradient Orbs */}
      <div className="glow-orb orb-pink" />
      <div className="glow-orb orb-primary" />
      <div className="glow-orb orb-purple" />
      <div className="glow-orb orb-emerald" />
    </div>
  );
}
