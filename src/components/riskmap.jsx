import { useState } from "react";
import { zones } from "../data/demoData";

function RiskMap({
  selectedZone = null,
  onZoneSelect = () => {},
  compact = false
}) {
  const [activeLayer, setActiveLayer] = useState("risk");
  const [selected, setSelected] = useState(selectedZone);

  const handleZoneClick = (zone) => {
    setSelected(zone.id);
    onZoneSelect(zone);
  };

  const getRiskClass = (status) => {
    const value = status.toLowerCase();

    if (value === "critical") return "critical";
    if (value === "severe") return "severe";
    if (value === "high") return "high";
    if (value === "moderate") return "moderate";
    return "low";
  };

  const getZonePosition = (index) => {
    const positions = [
      {
        left: "43%",
        top: "38%",
        width: "24%",
        height: "22%"
      },
      {
        left: "66%",
        top: "29%",
        width: "20%",
        height: "24%"
      },
      {
        left: "27%",
        top: "23%",
        width: "22%",
        height: "24%"
      },
      {
        left: "17%",
        top: "55%",
        width: "25%",
        height: "23%"
      },
      {
        left: "51%",
        top: "65%",
        width: "25%",
        height: "20%"
      }
    ];

    return positions[index] || positions[0];
  };

  return (
    <div className={`risk-map-container ${compact ? "compact" : ""}`}>
      <div className="risk-map-toolbar">
        <div className="map-layer-buttons">
          <button
            type="button"
            className={activeLayer === "risk" ? "active" : ""}
            onClick={() => setActiveLayer("risk")}
          >
            Risk Zones
          </button>

          <button
            type="button"
            className={activeLayer === "rainfall" ? "active" : ""}
            onClick={() => setActiveLayer("rainfall")}
          >
            Rainfall
          </button>

          <button
            type="button"
            className={activeLayer === "inundation" ? "active" : ""}
            onClick={() => setActiveLayer("inundation")}
          >
            Inundation
          </button>

          <button
            type="button"
            className={activeLayer === "radar" ? "active" : ""}
            onClick={() => setActiveLayer("radar")}
          >
            Radar
          </button>

          <button
            type="button"
            className={activeLayer === "roads" ? "active" : ""}
            onClick={() => setActiveLayer("roads")}
          >
            Roads
          </button>
        </div>

        <div className="map-demo-label">
          DEMO GIS
        </div>
      </div>

      <div className="risk-map-visual">
        <div className="map-grid"></div>

        <div className="map-water water-one"></div>
        <div className="map-water water-two"></div>

        <div className="map-road road-one"></div>
        <div className="map-road road-two"></div>
        <div className="map-road road-three"></div>
        <div className="map-road road-four"></div>

        {zones.map((zone, index) => {
          const position = getZonePosition(index);
          const riskClass = getRiskClass(zone.status);

          return (
            <button
              key={zone.id}
              type="button"
              className={`map-zone ${riskClass} ${
                selected === zone.id ? "selected" : ""
              }`}
              style={position}
              onClick={() => handleZoneClick(zone)}
            >
              <span className="zone-pulse"></span>

              <span className="zone-label">
                {zone.id}
              </span>

              <span className="zone-risk">
                {zone.risk}
              </span>
            </button>
          );
        })}

        <div className="map-marker hospital-marker">
          <span>H</span>
        </div>

        <div className="map-marker shelter-marker">
          <span>S</span>
        </div>

        <div className="map-marker shelter-marker-two">
          <span>S</span>
        </div>

        {activeLayer === "radar" && (
          <div className="radar-overlay">
            <div className="radar-ring radar-ring-one"></div>
            <div className="radar-ring radar-ring-two"></div>
            <div className="radar-ring radar-ring-three"></div>

            <div className="radar-center"></div>

            <div className="radar-sweep"></div>
          </div>
        )}

        {activeLayer === "rainfall" && (
          <div className="rainfall-overlay">
            <div className="rainfall-cell rainfall-cell-one">
              128
            </div>

            <div className="rainfall-cell rainfall-cell-two">
              112
            </div>

            <div className="rainfall-cell rainfall-cell-three">
              94
            </div>
          </div>
        )}

        {activeLayer === "inundation" && (
          <div className="inundation-overlay">
            <div className="inundation-depth depth-one">
              0.84m
            </div>

            <div className="inundation-depth depth-two">
              0.62m
            </div>

            <div className="inundation-depth depth-three">
              0.41m
            </div>
          </div>
        )}

        {activeLayer === "roads" && (
          <div className="road-status-overlay">
            <div className="road-block road-block-one">
              BLOCKED
            </div>

            <div className="road-block road-block-two">
              BLOCKED
            </div>
          </div>
        )}

        <div className="map-zoom-controls">
          <button type="button">+</button>
          <button type="button">−</button>
        </div>

        <div className="map-location-control">
          ◎
        </div>

        <div className="map-scale">
          <span></span>
          <small>2 km</small>
        </div>

        <div className="map-attribution">
          DEMO MAP • FLOODGUARD AI
        </div>
      </div>

      <div className="map-footer">
        <div className="map-legend">
          <div className="legend-title">
            FLOOD RISK
          </div>

          <div className="legend-items">
            <span>
              <i className="legend-low"></i>
              Low
            </span>

            <span>
              <i className="legend-moderate"></i>
              Moderate
            </span>

            <span>
              <i className="legend-high"></i>
              High
            </span>

            <span>
              <i className="legend-severe"></i>
              Severe
            </span>

            <span>
              <i className="legend-critical"></i>
              Critical
            </span>
          </div>
        </div>

        <div className="map-data-status">
          <span className="status-dot"></span>
          Simulated data
        </div>
      </div>

      {selected && (
        <div className="map-zone-details">
          {(() => {
            const zone = zones.find(
              (item) => item.id === selected
            );

            if (!zone) return null;

            return (
              <>
                <div className="zone-detail-header">
                  <div>
                    <span>{zone.id}</span>
                    <h4>{zone.name}</h4>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelected(null);
                      onZoneSelect(null);
                    }}
                  >
                    ×
                  </button>
                </div>

                <div className="zone-detail-risk">
                  <div>
                    <small>Risk Score</small>
                    <strong>{zone.risk}/100</strong>
                  </div>

                  <span
                    className={`detail-risk-badge ${getRiskClass(
                      zone.status
                    )}`}
                  >
                    {zone.status}
                  </span>
                </div>

                <div className="zone-detail-grid">
                  <div>
                    <span>Rainfall</span>
                    <strong>{zone.rainfall} mm/hr</strong>
                  </div>

                  <div>
                    <span>Water Depth</span>
                    <strong>{zone.waterDepth} m</strong>
                  </div>

                  <div>
                    <span>Inundation Probability</span>
                    <strong>{zone.inundationProbability}%</strong>
                  </div>

                  <div>
                    <span>Affected Area</span>
                    <strong>{zone.affectedArea} km²</strong>
                  </div>

                  <div>
                    <span>Population</span>
                    <strong>
                      {zone.population.toLocaleString()}
                    </strong>
                  </div>

                  <div>
                    <span>Blocked Roads</span>
                    <strong>{zone.roadsBlocked}</strong>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}

export default RiskMap;