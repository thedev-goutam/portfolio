import React from 'react';
import './SkillIcon.css';

const SkillIcon = ({ skill }) => {
  const getIcon = (skillName) => {
    switch (skillName.toLowerCase()) {
      case 'react':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1c-4.5 0-8 2.5-8 6s3.5 6 8 6 8-2.5 8-6-3.5-6-8-6"/>
            <path d="M12 23c4.5 0 8-2.5 8-6s-3.5-6-8-6-8 2.5-8 6 3.5 6 8 6"/>
          </svg>
        );
      case 'angular':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l9 3.5-1.5 13L12 22l-7.5-3.5L3 5.5z"/>
            <path d="M12 7l-3 7h2l.5-1.5h3L15 14h2z"/>
            <path d="M10.5 10.5h3"/>
          </svg>
        );
      case 'laravel':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12l3-3 3 3-3 3z"/>
            <path d="M21 12l-3-3-3 3 3 3z"/>
            <path d="M12 3v18"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        );
      case 'mysql':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="6" width="18" height="12" rx="2"/>
            <path d="M7 10h10"/>
            <path d="M7 14h6"/>
          </svg>
        );
      case 'postgresql':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C8 2 5 5 5 9v6c0 4 3 7 7 7s7-3 7-7V9c0-4-3-7-7-7z"/>
            <path d="M8 11h8"/>
            <path d="M10 15h4"/>
          </svg>
        );
      case 'mongodb':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l4 7-4 13-4-13z"/>
            <path d="M8 9h8"/>
          </svg>
        );
      case 'codeigniter':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 7l6-4 6 4 6-4v10l-6 4-6-4-6 4z"/>
            <path d="M9 3v8"/>
            <path d="M15 7v8"/>
          </svg>
        );
      case 'nextjs':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l4 4 4-4"/>
            <path d="M12 8v8"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12h8"/>
            <path d="M12 8v8"/>
          </svg>
        );
    }
  };

  return (
    <div className="skill-icon">
      {getIcon(skill)}
    </div>
  );
};

export default SkillIcon;