function DataSourceCard({
  name,
  icon = "◉",
  status = "DEMO",
  value = "",
  description = "",
  update = "",
  role = "",
  dataType = "",
  onClick = () => {}
}) {
  const getStatusClass = (currentStatus) => {
    const normalizedStatus = String(currentStatus)
      .toLowerCase()
      .trim();

    if (normalizedStatus === "online") {
      return "online";
    }

    if (normalizedStatus === "ready") {
      return "ready";
    }

    if (normalizedStatus === "warning") {
      return "warning";
    }

    if (normalizedStatus === "offline") {
      return "offline";
    }

    if (normalizedStatus === "demo") {
      return "demo";
    }

    return "demo";
  };

  const statusClass = getStatusClass(status);

  return (
    <button
      type="button"
      className={`data-source-card ${statusClass}`}
      onClick={onClick}
    >
      <div className="data-source-top">
        <div className="data-source-icon">
          {icon}
        </div>

        <span
          className={`data-source-status ${statusClass}`}
        >
          <span className="source-status-dot"></span>
          {status}
        </span>
      </div>

      <div className="data-source-content">
        <h3>{name}</h3>

        {dataType && (
          <span className="data-source-type">
            {dataType}
          </span>
        )}

        {description && (
          <p>{description}</p>
        )}

        {value && (
          <div className="data-source-value">
            {value}
          </div>
        )}
      </div>

      <div className="data-source-footer">
        <div className="source-information">
          {role && (
            <div className="source-role">
              <span>Role</span>
              <strong>{role}</strong>
            </div>
          )}

          {update && (
            <div className="source-update">
              <span>Updated</span>
              <strong>{update}</strong>
            </div>
          )}

          {!role && !update && (
            <div className="source-update">
              <span>Data Status</span>
              <strong>Available</strong>
            </div>
          )}
        </div>

        <span className="source-arrow">
          →
        </span>
      </div>
    </button>
  );
}

export default DataSourceCard;