import { useState } from "react";
import { alerts } from "../data/demoData";

function AlertPanel({
  onViewZone = () => {},
  onFindRoute = () => {}
}) {
  const [selectedAlert, setSelectedAlert] = useState(alerts[0]);
  const [warningSent, setWarningSent] = useState(false);

  const getSeverityClass = (severity) => {
    const value = severity.toLowerCase();

    if (value === "critical") return "critical";
    if (value === "warning") return "warning";
    if (value === "watch") return "watch";

    return "normal";
  };

  const handleSendWarning = () => {
    setWarningSent(true);

    setTimeout(() => {
      setWarningSent(false);
    }, 3000);
  };

  return (
    <div className="alert-panel">
      <div className="alert-panel-header">
        <div>
          <div className="panel-kicker">
            EARLY WARNING SYSTEM
          </div>

          <h3>Active Alerts</h3>
        </div>

        <div className="alert-count">
          {alerts.length}
        </div>
      </div>

      <div className="alert-summary">
        <div className="alert-summary-item critical-summary">
          <span className="summary-dot"></span>
          <div>
            <strong>
              {alerts.filter(
                (alert) => alert.severity === "Critical"
              ).length}
            </strong>
            <small>Critical</small>
          </div>
        </div>

        <div className="alert-summary-item warning-summary">
          <span className="summary-dot"></span>
          <div>
            <strong>
              {alerts.filter(
                (alert) => alert.severity === "Warning"
              ).length}
            </strong>
            <small>Warning</small>
          </div>
        </div>

        <div className="alert-summary-item watch-summary">
          <span className="summary-dot"></span>
          <div>
            <strong>
              {alerts.filter(
                (alert) => alert.severity === "Watch"
              ).length}
            </strong>
            <small>Watch</small>
          </div>
        </div>
      </div>

      <div className="alert-list">
        {alerts.map((alert) => {
          const severityClass = getSeverityClass(
            alert.severity
          );

          return (
            <button
              type="button"
              key={alert.id}
              className={`alert-list-item ${
                selectedAlert?.id === alert.id
                  ? "selected"
                  : ""
              } ${severityClass}`}
              onClick={() => setSelectedAlert(alert)}
            >
              <div className="alert-item-top">
                <div
                  className={`alert-severity-icon ${severityClass}`}
                >
                  {alert.severity === "Critical"
                    ? "!"
                    : alert.severity === "Warning"
                    ? "⚠"
                    : "◉"}
                </div>

                <div className="alert-item-heading">
                  <strong>{alert.title}</strong>
                  <span>{alert.zone}</span>
                </div>

                <span className="alert-time">
                  {alert.time}
                </span>
              </div>

              <div className="alert-item-bottom">
                <span>
                  Rainfall {alert.rainfall}
                </span>

                <span>
                  Depth {alert.waterDepth}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedAlert && (
        <div className="selected-alert">
          <div className="selected-alert-header">
            <div>
              <span
                className={`selected-alert-badge ${getSeverityClass(
                  selectedAlert.severity
                )}`}
              >
                {selectedAlert.severity}
              </span>

              <h4>{selectedAlert.title}</h4>
              <p>{selectedAlert.zone}</p>
            </div>

            <span className="selected-alert-id">
              {selectedAlert.id}
            </span>
          </div>

          <div className="selected-alert-message">
            {selectedAlert.message}
          </div>

          <div className="selected-alert-stats">
            <div>
              <span>Rainfall</span>
              <strong>
                {selectedAlert.rainfall}
              </strong>
            </div>

            <div>
              <span>Water Depth</span>
              <strong>
                {selectedAlert.waterDepth}
              </strong>
            </div>

            <div>
              <span>Lead Time</span>
              <strong>
                {selectedAlert.leadTime}
              </strong>
            </div>
          </div>

          <div className="alert-actions">
            <button
              type="button"
              className="alert-action primary"
              onClick={() =>
                onViewZone(selectedAlert.zone)
              }
            >
              <span>◉</span>
              View Zone
            </button>

            <button
              type="button"
              className="alert-action warning"
              onClick={handleSendWarning}
            >
              <span>↗</span>
              {warningSent
                ? "Warning Sent"
                : "Send Warning"}
            </button>

            <button
              type="button"
              className="alert-action secondary"
              onClick={() =>
                onFindRoute(selectedAlert.zone)
              }
            >
              <span>➜</span>
              Find Route
            </button>
          </div>

          <div className="alert-demo-notice">
            <span>i</span>
            <p>
              DEMO MODE — Notification delivery is
              simulated. No real emergency message is
              being transmitted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlertPanel;