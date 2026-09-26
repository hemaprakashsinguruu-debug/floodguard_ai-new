import { useState } from "react";
import { systemStatus, aiModeLabel } from "../data/demoData";

function SystemStatus() {
  const [selectedService, setSelectedService] = useState(null);

  const onlineCount = systemStatus.filter(
    (service) => service.status === "ONLINE"
  ).length;

  const demoCount = systemStatus.filter(
    (service) => service.status === "DEMO"
  ).length;

  const readyCount = systemStatus.filter(
    (service) => service.status === "READY"
  ).length;

  const getStatusClass = (status) => {
    if (status === "ONLINE") {
      return "online";
    }

    if (status === "READY") {
      return "ready";
    }

    if (status === "WARNING") {
      return "warning";
    }

    if (status === "OFFLINE") {
      return "offline";
    }

    return "demo";
  };

  const getServiceIcon = (name) => {
    const icons = {
      "Satellite Data": "🛰️",
      "Weather Radar": "📡",
      "Weather Stations": "🌧️",
      "NWP Model": "🌐",
      "AI Rainfall Model": "AI",
      "Inundation Model": "▽",
      "GIS Engine": "◈",
      "Alert Engine": "⚠",
      "Routing Engine": "➜",
      Database: "▣"
    };

    return icons[name] || "◉";
  };

  return (
    <div className="system-status-page">

      <div className="page-heading">

        <div>
          <div className="page-kicker">
            PLATFORM HEALTH MONITORING
          </div>

          <h1>System Status</h1>

          <p>
            Monitor FloodGuard data pipelines, AI
            services, GIS processing, alerts, routing
            and backend infrastructure.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          SYSTEM MONITORING
        </div>

      </div>

      <section className="system-summary-grid">

        <div className="system-summary-card operational">

          <div className="system-summary-icon">
            ✓
          </div>

          <div>
            <span>System Health</span>
            <strong>Operational</strong>
            <small>All core services available</small>
          </div>

        </div>

        <div className="system-summary-card">

          <div className="system-summary-icon">
            ◉
          </div>

          <div>
            <span>Online Services</span>
            <strong>{onlineCount}</strong>
            <small>Operational components</small>
          </div>

        </div>

        <div className="system-summary-card demo">

          <div className="system-summary-icon">
            ◇
          </div>

          <div>
            <span>Demo Services</span>
            <strong>{demoCount}</strong>
            <small>Simulated prototype feeds</small>
          </div>

        </div>

        <div className="system-summary-card ready">

          <div className="system-summary-icon">
            ◆
          </div>

          <div>
            <span>Ready Components</span>
            <strong>{readyCount}</strong>
            <small>Integration-ready services</small>
          </div>

        </div>

      </section>

      <section className="system-health-banner">

        <div className="health-banner-left">

          <div className="large-health-icon">
            ✓
          </div>

          <div>

            <span className="section-kicker">
              OVERALL PLATFORM HEALTH
            </span>

            <h2>
              FloodGuard AI Operational
            </h2>

            <p>
              Core visualization, data processing,
              alert and routing components are
              available in demonstration mode.
            </p>

          </div>

        </div>

        <div className="health-score">

          <strong>96%</strong>

          <span>
            HEALTH SCORE
          </span>

        </div>

      </section>

      <section className="service-status-section">

        <div className="section-card-header">

          <div>

            <span className="section-kicker">
              SERVICE MONITOR
            </span>

            <h2>
              Platform Components
            </h2>

          </div>

          <span className="zone-count">
            {systemStatus.length} services
          </span>

        </div>

        <div className="service-status-grid">

          {systemStatus.map((service) => {

            const statusClass = getStatusClass(
              service.status
            );

            return (
              <button
                type="button"
                key={service.name}
                className={`service-status-card ${statusClass} ${
                  selectedService &&
                  selectedService.name === service.name
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedService(service)
                }
              >

                <div className="service-card-top">

                  <div className="service-icon">
                    {getServiceIcon(service.name)}
                  </div>

                  <span
                    className={`service-status-badge ${statusClass}`}
                  >
                    <span className="service-status-dot"></span>
                    {service.status}
                  </span>

                </div>

                <div className="service-card-content">

                  <h3>
                    {service.name}
                  </h3>

                  <p>
                    {service.message}
                  </p>

                </div>

                <div className="service-card-footer">

                  <span>
                    System Component
                  </span>

                  <strong>
                    View Details →
                  </strong>

                </div>

              </button>
            );
          })}

        </div>

      </section>

      {selectedService && (

        <section className="selected-service-panel">

          <div className="selected-service-header">

            <div>

              <span className="section-kicker">
                SERVICE DETAILS
              </span>

              <h2>
                {selectedService.name}
              </h2>

            </div>

            <button
              type="button"
              className="service-close-button"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>

          </div>

          <div className="selected-service-body">

            <div className="selected-service-icon">
              {getServiceIcon(selectedService.name)}
            </div>

            <div className="selected-service-info">

              <div>
                <span>Status</span>

                <strong
                  className={`selected-status ${getStatusClass(
                    selectedService.status
                  )}`}
                >
                  {selectedService.status}
                </strong>
              </div>

              <div>
                <span>Service Message</span>

                <strong>
                  {selectedService.message}
                </strong>
              </div>

              <div>
                <span>Environment</span>

                <strong>
                  Prototype / Demonstration
                </strong>
              </div>

            </div>

          </div>

          <div className="service-detail-progress">

            <div className="progress-header">

              <span>
                Service Availability
              </span>

              <strong>
                {selectedService.status === "OFFLINE"
                  ? "0%"
                  : selectedService.status === "WARNING"
                    ? "78%"
                    : "100%"}
              </strong>

            </div>

            <div className="progress-track">

              <div
                className={`progress-fill ${getStatusClass(
                  selectedService.status
                )}`}
                style={{
                  width:
                    selectedService.status === "OFFLINE"
                      ? "0%"
                      : selectedService.status === "WARNING"
                        ? "78%"
                        : "100%"
                }}
              ></div>

            </div>

          </div>

        </section>

      )}

      <section className="system-pipeline-section">

        <div className="section-card-header">

          <div>

            <span className="section-kicker">
              END-TO-END PIPELINE
            </span>

            <h2>
              FloodGuard Processing Pipeline
            </h2>

          </div>

          <span className="pipeline-demo">
            {aiModeLabel}
          </span>

        </div>

        <div className="system-pipeline">

          <div className="system-pipeline-step">

            <div className="pipeline-step-number">
              01
            </div>

            <div className="pipeline-step-icon">
              ◉
            </div>

            <strong>
              DATA
            </strong>

            <span>
              Multi-source inputs
            </span>

            <small>
              Satellite • Radar • Weather
            </small>

          </div>

          <div className="system-pipeline-arrow">
            →
          </div>

          <div className="system-pipeline-step">

            <div className="pipeline-step-number">
              02
            </div>

            <div className="pipeline-step-icon">
              AI
            </div>

            <strong>
              FORECAST
            </strong>

            <span>
              Rainfall intelligence
            </span>

            <small>
              Probability • Forecast
            </small>

          </div>

          <div className="system-pipeline-arrow">
            →
          </div>

          <div className="system-pipeline-step">

            <div className="pipeline-step-number">
              03
            </div>

            <div className="pipeline-step-icon">
              ▽
            </div>

            <strong>
              PREDICT
            </strong>

            <span>
              Inundation modelling
            </span>

            <small>
              Depth • Extent • Probability
            </small>

          </div>

          <div className="system-pipeline-arrow">
            →
          </div>

          <div className="system-pipeline-step">

            <div className="pipeline-step-number">
              04
            </div>

            <div className="pipeline-step-icon">
              ◈
            </div>

            <strong>
              MAP
            </strong>

            <span>
              GIS risk visualization
            </span>

            <small>
              Zones • Roads • Facilities
            </small>

          </div>

          <div className="system-pipeline-arrow">
            →
          </div>

          <div className="system-pipeline-step">

            <div className="pipeline-step-number">
              05
            </div>

            <div className="pipeline-step-icon">
              !
            </div>

            <strong>
              WARN
            </strong>

            <span>
              Early warning engine
            </span>

            <small>
              Critical • Warning • Watch
            </small>

          </div>

          <div className="system-pipeline-arrow">
            →
          </div>

          <div className="system-pipeline-step">

            <div className="pipeline-step-number">
              06
            </div>

            <div className="pipeline-step-icon">
              ➜
            </div>

            <strong>
              RESPOND
            </strong>

            <span>
              Emergency coordination
            </span>

            <small>
              Routes • Teams • Shelters
            </small>

          </div>

        </div>

      </section>

      <section className="system-diagnostics-grid">

        <div className="diagnostic-card">

          <div className="diagnostic-header">

            <div>
              <span className="section-kicker">
                DATABASE
              </span>

              <h3>
                Data Storage
              </h3>
            </div>

            <span className="diagnostic-status">
              ONLINE
            </span>

          </div>

          <div className="diagnostic-details">

            <div>
              <span>Connection</span>
              <strong>READY</strong>
            </div>

            <div>
              <span>Database Engine</span>
              <strong>MySQL</strong>
            </div>

            <div>
              <span>Backend API</span>
              <strong>AVAILABLE</strong>
            </div>

          </div>

        </div>

        <div className="diagnostic-card">

          <div className="diagnostic-header">

            <div>
              <span className="section-kicker">
                AI ENGINE
              </span>

              <h3>
                Intelligence Layer
              </h3>
            </div>

            <span className="diagnostic-status demo">
              DEMO
            </span>

          </div>

          <div className="diagnostic-details">

            <div>
              <span>Mode</span>
              <strong>DEMONSTRATION</strong>
            </div>

            <div>
              <span>Forecast Engine</span>
              <strong>READY</strong>
            </div>

            <div>
              <span>Inundation Engine</span>
              <strong>SIMULATED</strong>
            </div>

          </div>

        </div>

        <div className="diagnostic-card">

          <div className="diagnostic-header">

            <div>
              <span className="section-kicker">
                GIS
              </span>

              <h3>
                Mapping Engine
              </h3>
            </div>

            <span className="diagnostic-status">
              ONLINE
            </span>

          </div>

          <div className="diagnostic-details">

            <div>
              <span>Map Renderer</span>
              <strong>READY</strong>
            </div>

            <div>
              <span>Risk Layers</span>
              <strong>ACTIVE</strong>
            </div>

            <div>
              <span>Route Layers</span>
              <strong>ACTIVE</strong>
            </div>

          </div>

        </div>

      </section>

      <section className="transparency-panel">

        <div className="transparency-icon">
          i
        </div>

        <div>

          <strong>
            SYSTEM STATUS TRANSPARENCY
          </strong>

          <p>
            This prototype operates in demonstration
            mode. External satellite, radar, weather,
            NWP and emergency communication services
            are not represented as live operational feeds.
            Components marked DEMO use simulated data.
          </p>

        </div>

      </section>

    </div>
  );
}

export default SystemStatus;