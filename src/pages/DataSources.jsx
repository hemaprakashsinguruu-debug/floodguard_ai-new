import { useState } from "react";
import {
  dataSources,
  demoTransparency,
  aiModeLabel
} from "../data/demoData";
import DataSourceCard from "../components/DataSourceCard";

function DataSources() {
  const [selectedSource, setSelectedSource] = useState(null);

  const getIcon = (name) => {
    const icons = {
      Satellite: "🛰️",
      "Weather Radar": "📡",
      "Weather Stations": "🌧️",
      NWP: "🌐",
      "DEM / Terrain": "⛰️",
      "Drainage Network": "〰️",
      "Historical Flood Data": "📊",
      "Water Level": "💧",
      "Road Network": "🛣️"
    };

    return icons[name] || "◉";
  };

  const onlineCount = dataSources.filter(
    (source) => source.status === "ONLINE"
  ).length;

  const readyCount = dataSources.filter(
    (source) => source.status === "READY"
  ).length;

  const demoCount = dataSources.filter(
    (source) => source.status === "DEMO"
  ).length;

  return (
    <div className="data-sources-page">

      <div className="page-heading">
        <div>
          <div className="page-kicker">
            MULTI-SOURCE DATA FUSION
          </div>

          <h1>Data Sources</h1>

          <p>
            Monitor the data streams supporting rainfall
            forecasting, inundation prediction and
            emergency response.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          DEMO DATA ENVIRONMENT
        </div>
      </div>

      <section className="source-summary-grid">

        <div className="source-summary-card">
          <div className="source-summary-icon">◉</div>

          <div>
            <span>Total Sources</span>
            <strong>{dataSources.length}</strong>
            <small>Configured data inputs</small>
          </div>
        </div>

        <div className="source-summary-card online">
          <div className="source-summary-icon">✓</div>

          <div>
            <span>Online</span>
            <strong>{onlineCount}</strong>
            <small>Currently operational</small>
          </div>
        </div>

        <div className="source-summary-card ready">
          <div className="source-summary-icon">◆</div>

          <div>
            <span>Integration Ready</span>
            <strong>{readyCount}</strong>
            <small>Ready for live connection</small>
          </div>
        </div>

        <div className="source-summary-card demo">
          <div className="source-summary-icon">◇</div>

          <div>
            <span>Demo Feeds</span>
            <strong>{demoCount}</strong>
            <small>Simulated for prototype</small>
          </div>
        </div>

      </section>

      <section className="data-source-overview">

        <div className="source-overview-header">

          <div>
            <span className="section-kicker">
              DATA FUSION ARCHITECTURE
            </span>

            <h2>
              Multi-Source Weather &amp; Flood Intelligence
            </h2>

            <p>
              FloodGuard combines multiple environmental,
              meteorological, terrain and infrastructure
              inputs before generating rainfall and
              inundation intelligence.
            </p>
          </div>

          <div className="fusion-status">
            <span className="fusion-status-dot"></span>
            DATA PIPELINE READY
          </div>

        </div>

        <div className="fusion-pipeline">

          <div className="fusion-stage">
            <div className="fusion-stage-number">01</div>
            <div className="fusion-stage-icon">◉</div>

            <strong>DATA SOURCES</strong>

            <span>
              Satellite • Radar • Stations • NWP
            </span>
          </div>

          <div className="fusion-arrow">→</div>

          <div className="fusion-stage">
            <div className="fusion-stage-number">02</div>
            <div className="fusion-stage-icon">◈</div>

            <strong>DATA FUSION</strong>

            <span>
              Quality checks &amp; normalization
            </span>
          </div>

          <div className="fusion-arrow">→</div>

          <div className="fusion-stage">
            <div className="fusion-stage-number">03</div>
            <div className="fusion-stage-icon">AI</div>

            <strong>AI / ML</strong>

            <span>
              Rainfall intelligence
            </span>
          </div>

          <div className="fusion-arrow">→</div>

          <div className="fusion-stage">
            <div className="fusion-stage-number">04</div>
            <div className="fusion-stage-icon">▽</div>

            <strong>FLOOD MODEL</strong>

            <span>
              Inundation &amp; water depth
            </span>
          </div>

          <div className="fusion-arrow">→</div>

          <div className="fusion-stage">
            <div className="fusion-stage-number">05</div>
            <div className="fusion-stage-icon">!</div>

            <strong>EARLY WARNING</strong>

            <span>
              Risk-based alerts
            </span>
          </div>

        </div>

      </section>

      <section className="data-source-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              MONITORED INPUTS
            </span>

            <h2>
              Environmental &amp; Infrastructure Sources
            </h2>
          </div>

          <span className="zone-count">
            {dataSources.length} sources
          </span>

        </div>

        <div className="data-source-grid">

          {dataSources.map((source) => (
            <DataSourceCard
              key={source.name}
              name={source.name}
              icon={getIcon(source.name)}
              status={source.status}
              dataType={source.dataType}
              role={source.role}
              update={source.update}
              onClick={() => setSelectedSource(source)}
            />
          ))}

        </div>

      </section>

      {selectedSource && (
        <section className="source-detail-panel">

          <div className="source-detail-header">

            <div>
              <span className="section-kicker">
                SOURCE DETAILS
              </span>

              <h2>
                {selectedSource.name}
              </h2>
            </div>

            <button
              type="button"
              className="source-close-button"
              onClick={() => setSelectedSource(null)}
            >
              ×
            </button>

          </div>

          <div className="source-detail-content">

            <div className="source-detail-icon">
              {getIcon(selectedSource.name)}
            </div>

            <div className="source-detail-information">

              <div>
                <span>Status</span>

                <strong
                  className={`source-detail-status ${selectedSource.status.toLowerCase()}`}
                >
                  {selectedSource.status}
                </strong>
              </div>

              <div>
                <span>Data Type</span>
                <strong>{selectedSource.dataType}</strong>
              </div>

              <div>
                <span>Update Frequency</span>
                <strong>{selectedSource.update}</strong>
              </div>

              <div>
                <span>System Role</span>
                <strong>{selectedSource.role}</strong>
              </div>

            </div>

          </div>

          <div className="source-detail-notice">

            <span>i</span>

            <p>
              {selectedSource.status === "DEMO"
                ? "This source is represented using simulated data in the current prototype. The architecture can be connected to an authorized operational feed."
                : "This source is configured as an integration-ready or operational component of the FloodGuard architecture."}
            </p>

          </div>

        </section>
      )}

      <section className="source-architecture-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              INTEGRATION ARCHITECTURE
            </span>

            <h2>
              From Raw Data to Decision Intelligence
            </h2>
          </div>

          <span className="pipeline-demo">
            {aiModeLabel}
          </span>

        </div>

        <div className="architecture-flow">

          <div className="architecture-column">

            <div className="architecture-node">
              <span>🛰️</span>
              Satellite
            </div>

            <div className="architecture-node">
              <span>📡</span>
              Weather Radar
            </div>

            <div className="architecture-node">
              <span>🌧️</span>
              Weather Stations
            </div>

            <div className="architecture-node">
              <span>🌐</span>
              NWP
            </div>

          </div>

          <div className="architecture-connector">
            →
          </div>

          <div className="architecture-core">

            <div className="architecture-core-icon">
              ◈
            </div>

            <strong>
              MULTI-SOURCE
              <br />
              DATA FUSION
            </strong>

            <span>
              Validation • Normalization
              <br />
              Quality Control
            </span>

          </div>

          <div className="architecture-connector">
            →
          </div>

          <div className="architecture-core ai">

            <div className="architecture-core-icon">
              AI
            </div>

            <strong>
              RAINFALL
              <br />
              INTELLIGENCE
            </strong>

            <span>
              Forecast • Probability
              <br />
              Heavy Rainfall Detection
            </span>

          </div>

          <div className="architecture-connector">
            →
          </div>

          <div className="architecture-column">

            <div className="architecture-node">
              <span>▽</span>
              Inundation Model
            </div>

            <div className="architecture-node">
              <span>◈</span>
              Risk Map
            </div>

            <div className="architecture-node">
              <span>⚠</span>
              Early Warning
            </div>

            <div className="architecture-node">
              <span>➜</span>
              Safe Routes
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
            DATA SOURCE TRANSPARENCY
          </strong>

          <p>
            {demoTransparency}
          </p>

        </div>

      </section>

    </div>
  );
}

export default DataSources;