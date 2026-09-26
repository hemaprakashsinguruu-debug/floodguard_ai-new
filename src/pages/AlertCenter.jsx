import { useState } from "react";
import { alerts } from "../data/demoData";

function AlertCenter() {
  const [selectedAlert, setSelectedAlert] = useState(alerts[0]);
  const [filter, setFilter] = useState("All");
  const [sentAlerts, setSentAlerts] = useState([]);
  const [notification, setNotification] = useState("");

  const severityLevels = [
    "All",
    "Critical",
    "Warning",
    "Watch"
  ];

  const filteredAlerts =
    filter === "All"
      ? alerts
      : alerts.filter(
          (alert) => alert.severity === filter
        );

  const getSeverityClass = (severity) => {
    const value = severity.toLowerCase();

    if (value === "critical") return "critical";
    if (value === "warning") return "warning";
    if (value === "watch") return "watch";

    return "normal";
  };

  const handleSendAlert = (alert) => {
    setSentAlerts((previous) => {
      if (previous.includes(alert.id)) {
        return previous;
      }

      return [...previous, alert.id];
    });

    setNotification(
      `Demo warning prepared for ${alert.zone}`
    );

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="alert-center-page">

      {/* NOTIFICATION */}
      {notification && (
        <div className="command-notification">
          <span>✓</span>
          {notification}
        </div>
      )}

      {/* PAGE HEADER */}
      <div className="page-heading">

        <div>

          <div className="page-kicker">
            EARLY WARNING &amp; NOTIFICATION
          </div>

          <h1>
            Alert Center
          </h1>

          <p>
            Monitor, review and simulate risk-based
            early warnings generated from rainfall and
            inundation predictions.
          </p>

        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          DEMO ALERT DELIVERY
        </div>

      </div>

      {/* ALERT SUMMARY */}
      <section className="alert-center-summary">

        <div className="alert-summary-card critical">

          <div className="alert-summary-icon">
            !
          </div>

          <div>
            <span>
              Critical Alerts
            </span>

            <strong>
              {
                alerts.filter(
                  (alert) =>
                    alert.severity === "Critical"
                ).length
              }
            </strong>

            <small>
              Immediate attention
            </small>
          </div>

        </div>

        <div className="alert-summary-card warning">

          <div className="alert-summary-icon">
            ⚠
          </div>

          <div>
            <span>
              Warning Alerts
            </span>

            <strong>
              {
                alerts.filter(
                  (alert) =>
                    alert.severity === "Warning"
                ).length
              }
            </strong>

            <small>
              Increased risk
            </small>
          </div>

        </div>

        <div className="alert-summary-card watch">

          <div className="alert-summary-icon">
            ◉
          </div>

          <div>
            <span>
              Watch Alerts
            </span>

            <strong>
              {
                alerts.filter(
                  (alert) =>
                    alert.severity === "Watch"
                ).length
              }
            </strong>

            <small>
              Continue monitoring
            </small>
          </div>

        </div>

        <div className="alert-summary-card total">

          <div className="alert-summary-icon">
            ◇
          </div>

          <div>
            <span>
              Total Active Alerts
            </span>

            <strong>
              {alerts.length}
            </strong>

            <small>
              Across monitored zones
            </small>
          </div>

        </div>

      </section>

      {/* MAIN ALERT AREA */}
      <section className="alert-center-main">

        {/* ALERT LIST */}
        <div className="alert-center-list-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                ACTIVE WARNING QUEUE
              </span>

              <h2>
                Current Alerts
              </h2>
            </div>

            <span className="zone-count">
              {filteredAlerts.length} shown
            </span>

          </div>

          {/* FILTERS */}
          <div className="alert-filters">

            {severityLevels.map((level) => (

              <button
                type="button"
                key={level}
                className={
                  filter === level
                    ? "active"
                    : ""
                }
                onClick={() => setFilter(level)}
              >
                {level}
              </button>

            ))}

          </div>

          {/* LIST */}
          <div className="alert-center-list">

            {filteredAlerts.map((alert) => {

              const severityClass =
                getSeverityClass(
                  alert.severity
                );

              return (
                <button
                  type="button"
                  key={alert.id}
                  className={`alert-center-item ${
                    selectedAlert.id === alert.id
                      ? "selected"
                      : ""
                  } ${severityClass}`}
                  onClick={() =>
                    setSelectedAlert(alert)
                  }
                >

                  <div
                    className={`alert-center-icon ${severityClass}`}
                  >
                    {alert.severity ===
                    "Critical"
                      ? "!"
                      : alert.severity ===
                        "Warning"
                        ? "⚠"
                        : "◉"}
                  </div>

                  <div className="alert-center-item-content">

                    <div className="alert-center-item-title">

                      <strong>
                        {alert.title}
                      </strong>

                      <span>
                        {alert.id}
                      </span>

                    </div>

                    <div className="alert-center-item-zone">
                      {alert.zone}
                    </div>

                    <p>
                      {alert.message}
                    </p>

                    <div className="alert-center-item-data">

                      <span>
                        Rainfall {alert.rainfall}
                      </span>

                      <span>
                        Depth {alert.waterDepth}
                      </span>

                      <span>
                        Lead Time {alert.leadTime}
                      </span>

                    </div>

                  </div>

                  <div className="alert-center-item-right">

                    <span
                      className={`selected-alert-badge ${severityClass}`}
                    >
                      {alert.severity}
                    </span>

                    <span>
                      {alert.time}
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

        </div>

        {/* SELECTED ALERT */}
        <div className="alert-detail-card">

          <div className="alert-detail-header">

            <div>

              <span className="section-kicker">
                ALERT DETAILS
              </span>

              <div className="alert-detail-title-row">

                <span
                  className={`selected-alert-badge ${getSeverityClass(
                    selectedAlert.severity
                  )}`}
                >
                  {selectedAlert.severity}
                </span>

                <span className="selected-alert-id">
                  {selectedAlert.id}
                </span>

              </div>

              <h2>
                {selectedAlert.title}
              </h2>

              <p>
                {selectedAlert.zone}
              </p>

            </div>

          </div>

          <div className="alert-detail-message">

            <span>
              Warning Message
            </span>

            <p>
              {selectedAlert.message}
            </p>

          </div>

          <div className="alert-detail-metrics">

            <div>

              <span>
                Rainfall
              </span>

              <strong>
                {selectedAlert.rainfall}
              </strong>

            </div>

            <div>

              <span>
                Water Depth
              </span>

              <strong>
                {selectedAlert.waterDepth}
              </strong>

            </div>

            <div>

              <span>
                Lead Time
              </span>

              <strong>
                {selectedAlert.leadTime}
              </strong>

            </div>

            <div>

              <span>
                Issued
              </span>

              <strong>
                {selectedAlert.time}
              </strong>

            </div>

          </div>

          <div className="alert-risk-indicator">

            <div className="alert-risk-header">

              <span>
                Risk Assessment
              </span>

              <strong>
                {
                  selectedAlert.severity ===
                  "Critical"
                    ? "VERY HIGH"
                    : selectedAlert.severity ===
                      "Warning"
                      ? "HIGH"
                      : "MODERATE"
                }
              </strong>

            </div>

            <div className="alert-risk-bar">

              <span
                style={{
                  width:
                    selectedAlert.severity ===
                    "Critical"
                      ? "95%"
                      : selectedAlert.severity ===
                        "Warning"
                        ? "80%"
                        : "60%"
                }}
              ></span>

            </div>

          </div>

          {/* ACTIONS */}
          <div className="alert-detail-actions">

            <button
              type="button"
              className="primary"
              onClick={() =>
                handleSendAlert(selectedAlert)
              }
            >
              <span>
                ↗
              </span>

              {sentAlerts.includes(
                selectedAlert.id
              )
                ? "Warning Prepared"
                : "Send Warning"}
            </button>

            <button
              type="button"
              onClick={() =>
                setNotification(
                  `Risk map focused on ${selectedAlert.zone}`
                )
              }
            >
              <span>
                ◉
              </span>

              View Risk Zone
            </button>

            <button
              type="button"
              onClick={() =>
                setNotification(
                  `Safe route analysis requested for ${selectedAlert.zone}`
                )
              }
            >
              <span>
                ➜
              </span>

              Find Safe Route
            </button>

          </div>

          <div className="alert-demo-notice">

            <span>
              i
            </span>

            <p>
              DEMO MODE — Alert transmission is simulated.
              No real emergency message is sent to the
              public or emergency services.
            </p>

          </div>

        </div>

      </section>

      {/* WARNING WORKFLOW */}
      <section className="alert-workflow-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              EARLY WARNING WORKFLOW
            </span>

            <h2>
              From Risk Detection to Warning
            </h2>
          </div>

          <span className="pipeline-demo">
            SIMULATED
          </span>

        </div>

        <div className="alert-workflow">

          <div className="alert-workflow-step">

            <div>
              01
            </div>

            <strong>
              DETECT
            </strong>

            <span>
              Heavy rainfall and storm activity
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="alert-workflow-step">

            <div>
              02
            </div>

            <strong>
              FORECAST
            </strong>

            <span>
              Predict rainfall intensity
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="alert-workflow-step">

            <div>
              03
            </div>

            <strong>
              PREDICT
            </strong>

            <span>
              Estimate flood extent and depth
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="alert-workflow-step">

            <div>
              04
            </div>

            <strong>
              CLASSIFY
            </strong>

            <span>
              Assign zone-level risk
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="alert-workflow-step">

            <div>
              05
            </div>

            <strong>
              WARN
            </strong>

            <span>
              Prepare early-warning notification
            </span>

          </div>

        </div>

      </section>

      {/* ALERT CHANNELS */}
      <section className="alert-channel-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              NOTIFICATION CHANNELS
            </span>

            <h2>
              Warning Delivery Architecture
            </h2>
          </div>

        </div>

        <div className="alert-channel-grid">

          <div className="alert-channel-card">

            <div className="channel-icon">
              📱
            </div>

            <div>
              <strong>
                Mobile Alerts
              </strong>

              <span>
                SMS / App notification
              </span>

              <small>
                Architecture ready
              </small>
            </div>

            <span className="channel-status">
              DEMO
            </span>

          </div>

          <div className="alert-channel-card">

            <div className="channel-icon">
              🖥️
            </div>

            <div>
              <strong>
                Command Center
              </strong>

              <span>
                Dashboard warning
              </span>

              <small>
                Active in prototype
              </small>
            </div>

            <span className="channel-status online">
              ONLINE
            </span>

          </div>

          <div className="alert-channel-card">

            <div className="channel-icon">
              📢
            </div>

            <div>
              <strong>
                Public Warning
              </strong>

              <span>
                Authorized public alert systems
              </span>

              <small>
                Integration ready
              </small>
            </div>

            <span className="channel-status">
              DEMO
            </span>

          </div>

          <div className="alert-channel-card">

            <div className="channel-icon">
              🚨
            </div>

            <div>
              <strong>
                Emergency Response
              </strong>

              <span>
                Response team notification
              </span>

              <small>
                Integration ready
              </small>
            </div>

            <span className="channel-status">
              DEMO
            </span>

          </div>

        </div>

      </section>

      {/* TRANSPARENCY */}
      <section className="transparency-panel">

        <div className="transparency-icon">
          i
        </div>

        <div>

          <strong>
            ALERT SYSTEM TRANSPARENCY
          </strong>

          <p>
            Alerts displayed here are simulated
            demonstration notifications generated from
            prototype rainfall and inundation data.
            Production deployment would connect to
            authorized emergency communication systems
            and follow applicable warning protocols.
          </p>

        </div>

      </section>

    </div>
  );
}

export default AlertCenter;