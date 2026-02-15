import React from 'react';
import './DashboardMockup.css';

const DashboardMockup = () => {
  return (
    <div className="dashboard-mockup">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div className="logo-area"></div>
          <div className="nav-items">
            <div className="nav-item active"></div>
            <div className="nav-item"></div>
            <div className="nav-item"></div>
          </div>
          <div className="user-area"></div>
        </div>
        
        <div className="dashboard-content">
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-number"></div>
              <div className="stat-label"></div>
            </div>
            <div className="stat-card">
              <div className="stat-number"></div>
              <div className="stat-label"></div>
            </div>
            <div className="stat-card">
              <div className="stat-number"></div>
              <div className="stat-label"></div>
            </div>
            <div className="stat-card">
              <div className="stat-number"></div>
              <div className="stat-label"></div>
            </div>
          </div>
          
          <div className="charts-row">
            <div className="chart-panel large">
              <div className="chart-header"></div>
              <div className="line-chart">
                <div className="chart-line"></div>
              </div>
            </div>
            <div className="chart-panel">
              <div className="chart-header"></div>
              <div className="donut-chart">
                <div className="donut"></div>
              </div>
            </div>
          </div>
          
          <div className="table-panel">
            <div className="table-header"></div>
            <div className="table-rows">
              <div className="table-row"></div>
              <div className="table-row"></div>
              <div className="table-row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;