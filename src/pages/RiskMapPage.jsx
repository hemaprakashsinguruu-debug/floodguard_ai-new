import { useState } from "react";
import RiskMap from "../components/riskmap";
import { zones, riskLegend } from "../data/demoData";

function RiskMapPage() {
  const [selectedZone, setSelectedZone] = useState(zones[0]);
  const [mapMode, setMapMode] = useState("risk");

  const getRiskClass = (status) => {
    const value = status.toLowerCase();

    if (value === "critical") return "critical";
    if (value === "severe") return "severe";
    if (value === "high") return "high";
    if (value === "moderate") return "moderate";

    return "low";
  };

  const totalPopulation = zones.reduce(
    (total, zone) => total + zone.population,
    0
  );

  const totalAffectedArea = zones.reduce(
    (total, zone) => total + zone.affectedArea,
    0
  );

  const totalBlockedRoads = zones.reduce(
    (total, zone) => total + zone.roadsBlocked,
    0
  );

  const criticalZones = zones.filter(
    (zone) =>
      zone.status === "Critical" ||
      zone.status === "Severe"
  ).length;

  return (
    <div className="risk-map-page">

      {/* PAGE HEADER */}
      <div className="page-heading">

        <div>
          <div className="page-kicker">
            GEOSPATIAL FLOOD INTELLIGENCE
          </div>

          <h1>
            Risk Map
          </h1>

          <p>
            Interactive visualization of rainfall,
            inundation, flood risk zones, roads and
            emergency infrastructure.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          DEMO GIS ENVIRONMENT
        </div>

      </div>

      {/* SUMMARY METRICS */}
      <section className="risk-map-summary">

        <div className="risk-summary-card">

          <div className="risk-summary-icon">
            ◈
          </div>

          <div>
            <span>
              Monitored Zones
            </span>

            <strong>
              {zones.length}
            </strong>
          </div>

        </div>

        <div className="risk-summary-card">

          <div className="risk-summary-icon">
            ⚠
          </div>

          <div>
            <span>
              High / Critical Zones
            </span>

            <strong>
              {criticalZones}
            </strong>
          </div>

        </div>

        <div className="risk-summary-card">

          <div className="risk-summary-icon">
            ≋
          </div>

          <div>
            <span>
              Predicted Area
            </span>

            <strong>
              {totalAffectedArea.toFixed(1)} km²
            </strong>
          </div>

        </div>

        <div className="risk-summary-card">

          <div className="risk-summary-icon">
            👥
          </div>

          <div>
            <span>
              Population in Zones
            </span>

            <strong>
              {totalPopulation.toLocaleString()}
            </strong>
          </div>

        </div>

        <div className="risk-summary-card">

          <div className="risk-summary-icon">
            ⛔
          </div>

          <div>
            <span>
              Blocked Roads
            </span>

            <strong>
              {totalBlockedRoads}
            </strong>
          </div>

        </div>

      </section>

      {/* MAIN MAP */}
      <section className="full-risk-map-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              LIVE GEOSPATIAL VIEW
            </span>

            <h2>
              Flood Risk &amp; Inundation Map
            </h2>
          </div>

          <div className="map-page-controls">

            <button
              type="button"
              className={
                mapMode === "risk"
                  ? "active"
                  : ""
              }
              onClick={() => setMapMode("risk")}
            >
              Risk
            </button>

            <button
              type="button"
              className={
                mapMode === "rainfall"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMapMode("rainfall")
              }
            >
              Rainfall
            </button>

            <button
              type="button"
              className={
                mapMode === "inundation"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setMapMode("inundation")
              }
            >
              Inundation
            </button>

            <button
              type="button"
              className={
                mapMode === "radar"
                  ? "active"
                  : ""
              }
              onClick={() => setMapMode("radar")}
            >
              Radar
            </button>

            <button
              type="button"
              className={
                mapMode === "roads"
                  ? "active"
                  : ""
              }
              onClick={() => setMapMode("roads")}
            >
              Roads
            </button>

          </div>

        </div>

        <div className="risk-map-page-layout">

          <div className="large-risk-map-wrapper">

            <RiskMap
              selectedZone={
                selectedZone
                  ? selectedZone.id
                  : null
              }
              onZoneSelect={(zone) => {
                if (zone) {
                  setSelectedZone(zone);
                }
              }}
            />

            <div className="map-mode-indicator">
              <span className="status-dot"></span>
              Active Layer:
              <strong>
                {mapMode.toUpperCase()}
              </strong>
            </div>

          </div>

          {/* ZONE DETAIL PANEL */}
          <div className="risk-zone-panel">

            <div className="risk-zone-panel-header">

              <div>
                <span className="section-kicker">
                  SELECTED ZONE
                </span>

                <h3>
                  {selectedZone.name}
                </h3>

                <span className="zone-id-label">
                  {selectedZone.id}
                </span>
              </div>

              <span
                className={`table-risk ${getRiskClass(
                  selectedZone.status
                )}`}
              >
                {selectedZone.status}
              </span>

            </div>

            <div className="zone-risk-score-large">

              <div>
                <span>
                  Risk Score
                </span>

                <strong>
                  {selectedZone.risk}
                </strong>

                <small>
                  /100
                </small>
              </div>

              <div className="zone-risk-meter">

                <span
                  style={{
                    width: `${selectedZone.risk}%`
                  }}
                ></span>

              </div>

            </div>

            <div className="risk-zone-stat-grid">

              <div>
                <span>
                  Rainfall
                </span>

                <strong>
                  {selectedZone.rainfall}
                  <small> mm/hr</small>
                </strong>
              </div>

              <div>
                <span>
                  Water Depth
                </span>

                <strong>
                  {selectedZone.waterDepth}
                  <small> m</small>
                </strong>
              </div>

              <div>
                <span>
                  Inundation
                </span>

                <strong>
                  {selectedZone.inundationProbability}
                  <small>%</small>
                </strong>
              </div>

              <div>
                <span>
                  Affected Area
                </span>

                <strong>
                  {selectedZone.affectedArea}
                  <small> km²</small>
                </strong>
              </div>

              <div>
                <span>
                  Population
                </span>

                <strong>
                  {selectedZone.population.toLocaleString()}
                </strong>
              </div>

              <div>
                <span>
                  Blocked Roads
                </span>

                <strong>
                  {selectedZone.roadsBlocked}
                </strong>
              </div>

            </div>

            <div className="zone-coordinates">

              <span>
                Map Coordinates
              </span>

              <strong>
                {selectedZone.latitude}° N
                {" · "}
                {selectedZone.longitude}° E
              </strong>

            </div>

            <div className="zone-panel-actions">

              <button
                type="button"
                onClick={() =>
                  setMapMode("inundation")
                }
              >
                View Inundation
              </button>

              <button
                type="button"
                onClick={() =>
                  setMapMode("rainfall")
                }
              >
                View Rainfall
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* RISK LEGEND */}
      <section className="risk-legend-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              RISK CLASSIFICATION
            </span>

            <h2>
              Flood Risk Legend
            </h2>
          </div>

          <span className="pipeline-demo">
            0 — 100 SCORE
          </span>

        </div>

        <div className="risk-legend-grid">

          {riskLegend.map((item) => (

            <div
              className="risk-legend-card"
              key={item.label}
            >

              <div
                className="risk-legend-color"
                style={{
                  backgroundColor: item.color
                }}
              ></div>

              <div>

                <strong>
                  {item.label}
                </strong>

                <span>
                  Risk score {item.range}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ZONE LIST */}
      <section className="risk-zone-list-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              ZONE INTELLIGENCE
            </span>

            <h2>
              Monitored Risk Zones
            </h2>
          </div>

          <span className="zone-count">
            Select a zone for details
          </span>

        </div>

        <div className="risk-zone-list">

          {zones.map((zone) => (

            <button
              type="button"
              key={zone.id}
              className={`risk-zone-list-item ${
                selectedZone.id === zone.id
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedZone(zone)
              }
            >

              <div className="risk-zone-list-main">

                <div className="risk-zone-list-id">
                  {zone.id}
                </div>

                <div>

                  <strong>
                    {zone.name}
                  </strong>

                  <span>
                    {zone.rainfall} mm/hr rainfall
                  </span>

                </div>

              </div>

              <div className="risk-zone-list-values">

                <div>
                  <span>
                    Risk
                  </span>

                  <strong>
                    {zone.risk}
                  </strong>
                </div>

                <div>
                  <span>
                    Depth
                  </span>

                  <strong>
                    {zone.waterDepth}m
                  </strong>
                </div>

                <div>
                  <span>
                    Probability
                  </span>

                  <strong>
                    {zone.inundationProbability}%
                  </strong>
                </div>

              </div>

              <span
                className={`table-risk ${getRiskClass(
                  zone.status
                )}`}
              >
                {zone.status}
              </span>

              <span className="risk-zone-arrow">
                →
              </span>

            </button>

          ))}

        </div>

      </section>

      {/* MAP DATA LAYERS */}
      <section className="map-layer-information">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              GIS DATA LAYERS
            </span>

            <h2>
              Available Map Intelligence
            </h2>
          </div>

        </div>

        <div className="map-layer-grid">

          <div className="map-layer-card">
            <span className="layer-icon">
              🌧️
            </span>

            <div>
              <strong>
                Rainfall Layer
              </strong>

              <p>
                Spatial rainfall intensity
                across monitored zones.
              </p>
            </div>

            <span className="layer-status">
              DEMO
            </span>
          </div>

          <div className="map-layer-card">
            <span className="layer-icon">
              📡
            </span>

            <div>
              <strong>
                Radar Layer
              </strong>

              <p>
                Simulated radar reflectivity
                and storm activity.
              </p>
            </div>

            <span className="layer-status">
              DEMO
            </span>
          </div>

          <div className="map-layer-card">
            <span className="layer-icon">
              ≋
            </span>

            <div>
              <strong>
                Inundation Layer
              </strong>

              <p>
                Predicted flood extent and
                water depth.
              </p>
            </div>

            <span className="layer-status">
              DEMO
            </span>
          </div>

          <div className="map-layer-card">
            <span className="layer-icon">
              🚧
            </span>

            <div>
              <strong>
                Road Network
              </strong>

              <p>
                Roads and simulated blocked
                road segments.
              </p>
            </div>

            <span className="layer-status ready">
              READY
            </span>
          </div>

          <div className="map-layer-card">
            <span className="layer-icon">
              🏥
            </span>

            <div>
              <strong>
                Hospitals
              </strong>

              <p>
                Emergency medical facilities
                and capacity information.
              </p>
            </div>

            <span className="layer-status ready">
              READY
            </span>
          </div>

          <div className="map-layer-card">
            <span className="layer-icon">
              🏠
            </span>

            <div>
              <strong>
                Shelters
              </strong>

              <p>
                Emergency shelters and
                occupancy information.
              </p>
            </div>

            <span className="layer-status ready">
              READY
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
            GIS DATA TRANSPARENCY
          </strong>

          <p>
            This prototype uses a simulated GIS
            visualization for demonstration purposes.
            Production deployment can connect authorized
            satellite, radar, terrain, drainage, road,
            hospital and shelter datasets through
            appropriate APIs and GIS services.
          </p>

        </div>

      </section>

    </div>
  );
}

export default RiskMapPage;