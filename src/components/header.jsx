import { useEffect, useState } from "react";
import { systemOverview } from "../data/demoData";

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  return (
    <header className="top-header">
      <div className="header-title-section">
        <div className="header-title-row">
          <h2>FLOODGUARD AI</h2>

          <span className="live-badge">
            <span className="live-dot"></span>
            LIVE MONITORING
          </span>
        </div>

        <p>
          Integrated Heavy Rainfall &amp; Inundation Early Warning System
        </p>
      </div>

      <div className="header-right">
        <div className="header-time">
          <strong>{formattedTime}</strong>
          <span>{formattedDate}</span>
        </div>

        <div className="header-demo">
          <span className="demo-dot"></span>
          DEMO MODE
        </div>

        <div className="header-health">
          <div className="health-icon">
            ✓
          </div>

          <div className="health-text">
            <strong>System Health</strong>
            <span>Operational</span>
          </div>
        </div>

        <div className="header-update">
          <span>Last data update</span>
          <strong>{systemOverview.lastUpdate}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;