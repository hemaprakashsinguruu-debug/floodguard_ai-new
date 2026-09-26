const menuItems = [
  {
    id: "command",
    label: "Command Center",
    icon: "⌂"
  },
  {
    id: "rainfall",
    label: "Rainfall Intelligence",
    icon: "◒"
  },
  {
    id: "radar",
    label: "Radar Monitor",
    icon: "◉"
  },
  {
    id: "inundation",
    label: "Inundation Prediction",
    icon: "▽"
  },
  {
    id: "risk",
    label: "Risk Map",
    icon: "◈"
  },
  {
    id: "simulator",
    label: "Scenario Simulator",
    icon: "⚙"
  },
  {
    id: "alerts",
    label: "Alert Center",
    icon: "!"
  },
  {
    id: "routes",
    label: "Safe Routes",
    icon: "➜"
  },
  {
    id: "response",
    label: "Emergency Response",
    icon: "✚"
  },
  {
    id: "validation",
    label: "Historical Validation",
    icon: "▤"
  },
  {
    id: "sources",
    label: "Data Sources",
    icon: "◫"
  },
  {
    id: "status",
    label: "System Status",
    icon: "●"
  }
];

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">
          <span>F</span>
        </div>

        <div className="brand-text">
          <h1>FLOODGUARD</h1>
          <span>AI</span>
        </div>
      </div>

      <div className="sidebar-subtitle">
        Heavy Rainfall & Inundation
        <br />
        Early Warning System
      </div>

      <div className="demo-badge">
        <span className="demo-dot"></span>
        DEMO MODE
      </div>

      <nav className="sidebar-navigation">
        <div className="navigation-title">
          MONITORING SYSTEM
        </div>

        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`sidebar-item ${
              activePage === item.id ? "active" : ""
            }`}
            onClick={() => setActivePage(item.id)}
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span className="sidebar-label">
              {item.label}
            </span>

            {activePage === item.id && (
              <span className="active-indicator"></span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="system-mini-card">
          <div className="system-mini-header">
            <span className="system-status-dot"></span>
            <span>System Operational</span>
          </div>

          <div className="system-mini-row">
            <span>Data Pipeline</span>
            <strong>READY</strong>
          </div>

          <div className="system-mini-row">
            <span>AI Engine</span>
            <strong>DEMO</strong>
          </div>

          <div className="system-mini-row">
            <span>GIS Engine</span>
            <strong>ONLINE</strong>
          </div>
        </div>

        <div className="sidebar-footer">
          <span>FLOODGUARD AI</span>
          <small>Prototype v1.0</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;