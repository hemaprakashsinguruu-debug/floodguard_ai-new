import { useState } from "react";
import { radarCells } from "../data/demoData";

function RadarMonitor() {
  const [selectedCell, setSelectedCell] = useState(radarCells[0]);
  const [radarMode, setRadarMode] = useState("reflectivity");
  const [isPlaying, setIsPlaying] = useState(false);

  const getIntensityClass = (intensity) => {
    const value = intensity.toLowerCase();

    if (value === "severe") return "severe";
    if (value === "high") return "high";
    return "moderate";
  };

  return (
    <div className="radar-monitor-page">
      <div className="page-heading">
        <div>
          <div className="page-kicker">
            WEATHER RADAR INTELLIGENCE
          </div>

          <h1>Radar Monitor</h1>

          <p>
            Monitor simulated storm cells, radar reflectivity,
            rainfall intensity and storm movement.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          SIMULATED RADAR FEED
        </div>
      </div>

      <section className="radar-overview-grid">
        <div className="radar-main-card">
          <div className="section-card-header">
            <div>
              <span className="section-kicker">
                WEATHER RADAR
              </span>

              <h2>Regional Radar Surveillance</h2>
            </div>

            <div className="radar-header-controls">
              <span className="radar-feed-status">
                <span className="live-pulse"></span>
                FEED ACTIVE
              </span>

              <span className="radar-update">
                Updated 2 min ago
              </span>
            </div>
          </div>

          <div className="radar-visual">
            <div className="radar-background-grid"></div>

            <div className="radar-crosshair horizontal"></div>
            <div className="radar-crosshair vertical"></div>

            <div className="radar-circle circle-large"></div>
            <div className="radar-circle circle-medium"></div>
            <div className="radar-circle circle-small"></div>

            <div className="radar-sweep-large"></div>

            <div className="radar-location-label label-center">
              VIZAG REGION
            </div>

            <button
              type="button"
              className="storm-cell cell-alpha"
              onClick={() => setSelectedCell(radarCells[0])}
            >
              <span className="storm-pulse"></span>
              <strong>91</strong>
              <small>dBZ</small>
            </button>

            <button
              type="button"
              className="storm-cell cell-beta"
              onClick={() => setSelectedCell(radarCells[1])}
            >
              <span className="storm-pulse"></span>
              <strong>76</strong>
              <small>dBZ</small>
            </button>

            <button
              type="button"
              className="storm-cell cell-gamma"
              onClick={() => setSelectedCell(radarCells[2])}
            >
              <span className="storm-pulse"></span>
              <strong>58</strong>
              <small>dBZ</small>
            </button>

            <div className="radar-map-label label-north">
              N
            </div>

            <div className="radar-map-label label-east">
              E
            </div>

            <div className="radar-map-label label-south">
              S
            </div>

            <div className="radar-map-label label-west">
              W
            </div>

            <div className="radar-scale">
              <span></span>
              <small>20 km</small>
            </div>

            <div className="radar-demo-watermark">
              DEMO RADAR
            </div>
          </div>

          <div className="radar-toolbar">
            <div className="radar-mode-buttons">
              <button
                type="button"
                className={
                  radarMode === "reflectivity"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setRadarMode("reflectivity")
                }
              >
                Reflectivity
              </button>

              <button
                type="button"
                className={
                  radarMode === "rainfall"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setRadarMode("rainfall")
                }
              >
                Rainfall
              </button>

              <button
                type="button"
                className={
                  radarMode === "movement"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setRadarMode("movement")
                }
              >
                Storm Movement
              </button>
            </div>

            <button
              type="button"
              className={`radar-play-button ${
                isPlaying ? "playing" : ""
              }`}
              onClick={() =>
                setIsPlaying(!isPlaying)
              }
            >
              {isPlaying ? "Ⅱ Pause" : "▶ Play Timeline"}
            </button>
          </div>

          <div className="radar-legend">
            <span>
              <i className="radar-legend-low"></i>
              Weak
            </span>

            <span>
              <i className="radar-legend-medium"></i>
              Moderate
            </span>

            <span>
              <i className="radar-legend-high"></i>
              High
            </span>

            <span>
              <i className="radar-legend-severe"></i>
              Severe
            </span>
          </div>
        </div>

        <div className="selected-storm-card">
          <div className="selected-storm-header">
            <div>
              <span className="section-kicker">
                SELECTED STORM CELL
              </span>

              <h2>{selectedCell.name}</h2>
            </div>

            <span
              className={`storm-intensity-badge ${getIntensityClass(
                selectedCell.intensity
              )}`}
            >
              {selectedCell.intensity}
            </span>
          </div>

          <div className="storm-score">
            <div className="storm-score-circle">
              <strong>
                {selectedCell.probability}
              </strong>

              <span>%</span>
            </div>

            <div>
              <span>Rainfall Event Probability</span>
              <strong>
                High-confidence storm cell
              </strong>
            </div>
          </div>

          <div className="storm-detail-list">
            <div>
              <span>Reflectivity</span>
              <strong>
                {selectedCell.reflectivity} dBZ
              </strong>
            </div>

            <div>
              <span>Rainfall Rate</span>
              <strong>
                {selectedCell.rainfall} mm/hr
              </strong>
            </div>

            <div>
              <span>Movement Direction</span>
              <strong>
                {selectedCell.movement}
              </strong>
            </div>

            <div>
              <span>Movement Speed</span>
              <strong>
                {selectedCell.speed}
              </strong>
            </div>
          </div>

          <div className="storm-impact-box">
            <span>Potential Impact</span>

            <p>
              Continued movement of this storm cell may
              contribute to heavy rainfall and increasing
              inundation risk in downstream low-lying areas.
            </p>
          </div>

          <div className="storm-action-row">
            <button
              type="button"
              onClick={() =>
                setRadarMode("movement")
              }
            >
              Track Movement
            </button>

            <button
              type="button"
              onClick={() =>
                setRadarMode("rainfall")
              }
            >
              View Rainfall
            </button>
          </div>
        </div>
      </section>

      <section className="storm-cells-section">
        <div className="section-card-header">
          <div>
            <span className="section-kicker">
              DETECTED STORM CELLS
            </span>

            <h2>Storm Cell Intelligence</h2>
          </div>

          <span className="zone-count">
            {radarCells.length} cells detected
          </span>
        </div>

        <div className="storm-cells-grid">
          {radarCells.map((cell) => (
            <button
              type="button"
              key={cell.id}
              className={`storm-cell-card ${
                selectedCell.id === cell.id
                  ? "selected"
                  : ""
              }`}
              onClick={() => setSelectedCell(cell)}
            >
              <div className="storm-card-top">
                <div className="storm-card-icon">
                  ◉
                </div>

                <span
                  className={`storm-card-status ${getIntensityClass(
                    cell.intensity
                  )}`}
                >
                  {cell.intensity}
                </span>
              </div>

              <h3>{cell.name}</h3>

              <div className="storm-card-main">
                <strong>
                  {cell.reflectivity}
                </strong>

                <span>dBZ</span>
              </div>

              <div className="storm-card-data">
                <div>
                  <span>Rainfall</span>
                  <strong>
                    {cell.rainfall} mm/hr
                  </strong>
                </div>

                <div>
                  <span>Movement</span>
                  <strong>
                    {cell.movement} · {cell.speed}
                  </strong>
                </div>

                <div>
                  <span>Probability</span>
                  <strong>
                    {cell.probability}%
                  </strong>
                </div>
              </div>

              <div className="storm-card-footer">
                <span>
                  Click to inspect
                </span>

                <span>→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="radar-analysis-grid">
        <div className="radar-analysis-card">
          <div className="section-card-header">
            <div>
              <span className="section-kicker">
                RADAR INTERPRETATION
              </span>

              <h2>Reflectivity Assessment</h2>
            </div>
          </div>

          <div className="reflectivity-scale">
            <div className="reflectivity-gradient"></div>

            <div className="reflectivity-labels">
              <span>20</span>
              <span>40</span>
              <span>60</span>
              <span>80</span>
              <span>100+</span>
            </div>
          </div>

          <div className="reflectivity-description">
            <div>
              <span className="indicator-dot moderate"></span>
              <div>
                <strong>Moderate Echo</strong>
                <p>
                  Indicates organized precipitation
                  activity.
                </p>
              </div>
            </div>

            <div>
              <span className="indicator-dot high"></span>
              <div>
                <strong>High Echo</strong>
                <p>
                  Indicates stronger rainfall cells.
                </p>
              </div>
            </div>

            <div>
              <span className="indicator-dot severe"></span>
              <div>
                <strong>Severe Echo</strong>
                <p>
                  Indicates intense precipitation
                  requiring monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="radar-analysis-card">
          <div className="section-card-header">
            <div>
              <span className="section-kicker">
                STORM MOVEMENT
              </span>

              <h2>Movement Intelligence</h2>
            </div>
          </div>

          <div className="movement-visual">
            <div className="movement-arrow">
              ↗
            </div>

            <div className="movement-content">
              <span>Dominant Direction</span>
              <strong>North-East</strong>
              <small>
                Multiple storm cells moving toward
                monitored urban areas
              </small>
            </div>
          </div>

          <div className="movement-stats">
            <div>
              <span>Average Speed</span>
              <strong>23 km/h</strong>
            </div>

            <div>
              <span>Cells Moving NE</span>
              <strong>2 / 3</strong>
            </div>

            <div>
              <span>Highest Reflectivity</span>
              <strong>91 dBZ</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="radar-pipeline">
        <div className="section-card-header">
          <div>
            <span className="section-kicker">
              RADAR TO WARNING PIPELINE
            </span>

            <h2>
              How Radar Intelligence Supports
              Flood Prediction
            </h2>
          </div>
        </div>

        <div className="radar-pipeline-flow">
          <div className="radar-pipeline-step">
            <div>01</div>
            <strong>RADAR SCAN</strong>
            <span>
              Detect precipitation echoes
            </span>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="radar-pipeline-step">
            <div>02</div>
            <strong>STORM CELLS</strong>
            <span>
              Identify intensity and movement
            </span>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="radar-pipeline-step">
            <div>03</div>
            <strong>RAINFALL FORECAST</strong>
            <span>
              Feed multi-source AI/ML forecast
            </span>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="radar-pipeline-step">
            <div>04</div>
            <strong>INUNDATION MODEL</strong>
            <span>
              Estimate flood extent and depth
            </span>
          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="radar-pipeline-step">
            <div>05</div>
            <strong>EARLY WARNING</strong>
            <span>
              Trigger risk-based alerts
            </span>
          </div>
        </div>
      </section>

      <section className="transparency-panel">
        <div className="transparency-icon">
          i
        </div>

        <div>
          <strong>
            RADAR DATA TRANSPARENCY
          </strong>

          <p>
            Radar imagery, storm cells and reflectivity
            values shown in this prototype are simulated
            demonstration data. The architecture is
            designed for integration with authorized
            weather radar services.
          </p>
        </div>
      </section>
    </div>
  );
}

export default RadarMonitor;