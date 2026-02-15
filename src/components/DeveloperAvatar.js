import React from 'react';
import './DeveloperAvatar.css';

const DeveloperAvatar = () => {
  return (
    <div className="avatar-container">
      <div className="avatar-frame">
        <div className="avatar-bg">
          <div className="avatar-figure">
            <div className="avatar-head"></div>
            <div className="avatar-body"></div>
            <div className="avatar-glasses"></div>
          </div>
        </div>
        <div className="avatar-glow"></div>
      </div>
    </div>
  );
};

export default DeveloperAvatar;