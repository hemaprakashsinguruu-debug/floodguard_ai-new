import { useState } from "react";
import {
  inundationForecast,
  zones
} from "../data/demoData";

function InundationPrediction() {
  const [selectedHorizon, setSelectedHorizon] =
    useState(inundationForecast[2]);

  const [selectedZone, setSelectedZone] =
    useState(zones[0]);

  const getRiskClass = (status) => {
    const value = status.toLowerCase();

    if (value === "critical") return "critical";
    if (value === "severe") return "severe";
    if (value === "high") return "high";
    if (value === "moderate") return "moderate";

    return "low";
  };

  return (
    <div className="inundation-prediction-page">

      {/* PAGE HEADER */}
      <div className="page-heading">

        <div>

          <div className="page-kicker">
            FLOOD MODELLING &amp; PREDICTION
          </div>

          <h1>
            Inundation Prediction
          </h1>

          <p>
            Predict flood extent, water depth and
            inundation probability from forecast
            rainfall and terrain information.
          </p>

        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          AI/ML DEMONSTRATION MODE
        </div>

      </div>

      {/* MAIN PREDICTION SUMMARY */}
      <section className="inundation-summary-grid">

        <div className="inundation-summary-card primary">

          <div className="summary-card-header">

            <div>
              <span className="section-kicker">
                CURRENT PREDICTION
              </span>

              <h2>
                Regional Inundation Risk
              </h2>
            </div>

            <span className="summary-risk-badge critical">
              HIGH
            </span>

          </div>

          <div className="inundation-score">

            <div className="large-risk-number">
              91
            </div>

            <div className="large-risk-label">
              <strong>
                Flood Risk Score
              </strong>

              <span>
                out of 100
              </span>
            </div>

          </div>

          <div className="risk-meter">

            <span
              style={{
                width: "91%"
              }}
            ></span>

          </div>

          <div className="prediction-summary-stats">

            <div>
              <span>
                Maximum Depth
              </span>

              <strong>
                0.84 m
              </strong>
            </div>

            <div>
              <span>
                Affected Area
              </span>

              <strong>
                18.6 km²
              </strong>
            </div>

            <div>
              <span>
                Probability
              </span>

              <strong>
                91%
              </strong>
            </div>

          </div>

        </div>

        <div className="inundation-summary-card">

          <div className="summary-card-header">

            <div>
              <span className="section-kicker">
                WARNING WINDOW
              </span>

              <h2>
                Advance Warning
              </h2>
            </div>

            <div className="warning-clock">
              ◷
            </div>

          </div>

          <div className="warning-time">
            2h 35m
          </div>

          <p>
            Estimated time available for
            early-warning and emergency
            response actions.
          </p>

          <div className="warning-status">

            <span className="status-dot"></span>

            <div>
              <strong>
                Early action window available
              </strong>

              <span>
                Continue monitoring forecast updates
              </span>
            </div>

          </div>

        </div>

        <div className="inundation-summary-card">

          <div className="summary-card-header">

            <div>
              <span className="section-kicker">
                MODEL STATUS
              </span>

              <h2>
                Prediction Engine
              </h2>
            </div>

            <span className="model-demo-badge">
              DEMO
            </span>

          </div>

          <div className="model-status-main">

            <div className="model-status-icon">
              AI
            </div>

            <div>
              <strong>
                Inundation Model
              </strong>

              <span>
                Deterministic simulation engine
              </span>
            </div>

          </div>

          <div className="model-status-list">

            <div>
              <span>
                Rainfall Input
              </span>

              <strong>
                READY
              </strong>
            </div>

            <div>
              <span>
                Terrain / DEM
              </span>

              <strong>
                READY
              </strong>
            </div>

            <div>
              <span>
                Drainage Network
              </span>

              <strong>
                READY
              </strong>
            </div>

            <div>
              <span>
                Historical Data
              </span>

              <strong>
                DEMO
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* FORECAST TIMELINE */}
      <section className="inundation-forecast-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              TIME-SERIES PREDICTION
            </span>

            <h2>
              Inundation Forecast Timeline
            </h2>

            <p>
              Simulated progression of flood extent,
              maximum depth and probability.
            </p>
          </div>

          <span className="pipeline-demo">
            FORECAST WINDOW
          </span>

        </div>

        <div className="inundation-timeline">

          {inundationForecast.map((forecast) => (

            <button
              type="button"
              key={forecast.horizon}
              className={`inundation-timeline-card ${
                selectedHorizon.horizon ===
                forecast.horizon
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedHorizon(forecast)
              }
            >

              <div className="timeline-horizon">
                {forecast.horizon}
              </div>

              <div className="timeline-risk">

                <div
                  className="timeline-risk-circle"
                  style={{
                    "--risk-progress": `${forecast.probability}%`
                  }}
                >
                  <strong>
                    {forecast.probability}
                  </strong>

                  <span>
                    %
                  </span>
                </div>

              </div>

              <div className="timeline-data">

                <div>
                  <span>
                    Affected Area
                  </span>

                  <strong>
                    {forecast.affectedArea} km²
                  </strong>
                </div>

                <div>
                  <span>
                    Maximum Depth
                  </span>

                  <strong>
                    {forecast.maxDepth} m
                  </strong>
                </div>

                <div>
                  <span>
                    Probability
                  </span>

                  <strong>
                    {forecast.probability}%
                  </strong>
                </div>

              </div>

            </button>

          ))}

        </div>

      </section>

      {/* SELECTED FORECAST */}
      <section className="selected-prediction-section">

        <div className="selected-prediction-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                SELECTED FORECAST
              </span>

              <h2>
                {selectedHorizon.horizon} Inundation
                Scenario
              </h2>
            </div>

            <span className="selected-forecast-badge">
              {selectedHorizon.probability}% PROBABILITY
            </span>

          </div>

          <div className="prediction-visual">

            <div className="prediction-map">

              <div className="prediction-grid"></div>

              <div className="prediction-water water-area-one"></div>
              <div className="prediction-water water-area-two"></div>
              <div className="prediction-water water-area-three"></div>

              <div className="prediction-road road-a"></div>
              <div className="prediction-road road-b"></div>
              <div className="prediction-road road-c"></div>

              <div className="prediction-zone zone-a">
                <span>
                  Z-01
                </span>
              </div>

              <div className="prediction-zone zone-b">
                <span>
                  Z-02
                </span>
              </div>

              <div className="prediction-zone zone-c">
                <span>
                  Z-03
                </span>
              </div>

              <div className="prediction-depth-marker marker-a">
                {selectedHorizon.maxDepth}m
              </div>

              <div className="prediction-depth-marker marker-b">
                0.62m
              </div>

              <div className="prediction-depth-marker marker-c">
                0.41m
              </div>

              <div className="prediction-map-label">
                SIMULATED INUNDATION EXTENT
              </div>

            </div>

            <div className="prediction-side-panel">

              <div className="prediction-side-title">
                <span>
                  Forecast Horizon
                </span>

                <strong>
                  {selectedHorizon.horizon}
                </strong>
              </div>

              <div className="prediction-side-metric">

                <span>
                  Predicted Area
                </span>

                <strong>
                  {selectedHorizon.affectedArea}
                  <small> km²</small>
                </strong>

              </div>

              <div className="prediction-side-metric">

                <span>
                  Maximum Water Depth
                </span>

                <strong>
                  {selectedHorizon.maxDepth}
                  <small> m</small>
                </strong>

              </div>

              <div className="prediction-side-metric">

                <span>
                  Inundation Probability
                </span>

                <strong>
                  {selectedHorizon.probability}
                  <small>%</small>
                </strong>

              </div>

              <div className="prediction-confidence">

                <div className="confidence-header">
                  <span>
                    Prediction Confidence
                  </span>

                  <strong>
                    HIGH
                  </strong>
                </div>

                <div className="confidence-bar">
                  <span
                    style={{
                      width: `${selectedHorizon.probability}%`
                    }}
                  ></span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ZONE PREDICTIONS */}
      <section className="zone-prediction-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              ZONE-LEVEL MODELLING
            </span>

            <h2>
              Inundation Prediction by Zone
            </h2>
          </div>

          <span className="zone-count">
            {zones.length} zones
          </span>

        </div>

        <div className="zone-prediction-grid">

          {zones.map((zone) => (

            <button
              type="button"
              key={zone.id}
              className={`zone-prediction-card ${
                selectedZone.id === zone.id
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setSelectedZone(zone)
              }
            >

              <div className="zone-prediction-header">

                <div>
                  <span>
                    {zone.id}
                  </span>

                  <h3>
                    {zone.name}
                  </h3>
                </div>

                <span
                  className={`table-risk ${getRiskClass(
                    zone.status
                  )}`}
                >
                  {zone.status}
                </span>

              </div>

              <div className="zone-risk-score">

                <strong>
                  {zone.risk}
                </strong>

                <span>
                  /100
                </span>

              </div>

              <div className="zone-prediction-data">

                <div>
                  <span>
                    Rainfall
                  </span>

                  <strong>
                    {zone.rainfall} mm/hr
                  </strong>
                </div>

                <div>
                  <span>
                    Water Depth
                  </span>

                  <strong>
                    {zone.waterDepth} m
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

                <div>
                  <span>
                    Area
                  </span>

                  <strong>
                    {zone.affectedArea} km²
                  </strong>
                </div>

              </div>

              <div className="zone-prediction-progress">

                <span>
                  Inundation Probability
                </span>

                <div>
                  <span
                    style={{
                      width: `${zone.inundationProbability}%`
                    }}
                  ></span>
                </div>

              </div>

            </button>

          ))}

        </div>

      </section>

      {/* MODEL PIPELINE */}
      <section className="inundation-model-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              FLOOD MODELLING PIPELINE
            </span>

            <h2>
              Rainfall to Inundation Prediction
            </h2>
          </div>

          <span className="pipeline-demo">
            DEMO ENGINE
          </span>

        </div>

        <div className="inundation-model-flow">

          <div className="model-flow-step">

            <div className="model-flow-number">
              01
            </div>

            <div className="model-flow-icon">
              🌧️
            </div>

            <strong>
              FORECAST RAINFALL
            </strong>

            <span>
              AI/ML rainfall prediction
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="model-flow-step">

            <div className="model-flow-number">
              02
            </div>

            <div className="model-flow-icon">
              ⛰️
            </div>

            <strong>
              TERRAIN / DEM
            </strong>

            <span>
              Elevation and terrain structure
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="model-flow-step">

            <div className="model-flow-number">
              03
            </div>

            <div className="model-flow-icon">
              ≋
            </div>

            <strong>
              DRAINAGE
            </strong>

            <span>
              Water flow pathways
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="model-flow-step">

            <div className="model-flow-number">
              04
            </div>

            <div className="model-flow-icon">
              AI
            </div>

            <strong>
              FLOOD MODEL
            </strong>

            <span>
              Extent and depth simulation
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="model-flow-step">

            <div className="model-flow-number">
              05
            </div>

            <div className="model-flow-icon">
              ⚠
            </div>

            <strong>
              RISK OUTPUT
            </strong>

            <span>
              Warning zones and actions
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
            INUNDATION MODEL TRANSPARENCY
          </strong>

          <p>
            Flood extent, water depth and probability
            values shown in this prototype are simulated
            demonstration outputs. The architecture is
            designed for integration with authorized
            terrain, drainage, rainfall, water-level and
            historical flood datasets.
          </p>

        </div>

      </section>

    </div>
  );
}

export default InundationPrediction;