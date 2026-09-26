import { useState } from "react";
import MetricCard from "../components/MetricCard";
import RiskMap from "../components/riskmap";
import AlertPanel from "../components/AlertPanel";
import {
  systemOverview,
  pipelineSteps,
  zones
} from "../data/demoData";

function CommandCenter() {
  const [selectedZone, setSelectedZone] = useState(null);
  const [notification, setNotification] = useState("");

  const handleViewZone = (zoneName) => {
    const zone = zones.find(
      (item) => item.name === zoneName
    );

    if (zone) {
      setSelectedZone(zone.id);

      setNotification(
        `Showing ${zone.name} on the risk map`
      );

      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  const handleFindRoute = (zoneName) => {
    setNotification(
      `Risk-aware route analysis requested for ${zoneName}`
    );

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="command-center-page">

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
            DISASTER MANAGEMENT COMMAND CENTER
          </div>

          <h1>Situation Overview</h1>

          <p>
            Integrated heavy rainfall monitoring,
            inundation prediction and early warning.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          SIMULATED OPERATIONAL DATA
        </div>
      </div>

      {/* KEY METRICS */}
      <section className="metric-grid">

        <MetricCard
          title="Current Rainfall"
          value={systemOverview.currentRainfall}
          unit="mm/hr"
          subtitle="Current observation"
          icon="🌧️"
        />

        <MetricCard
          title="3h Forecast"
          value={systemOverview.forecast3h}
          unit="mm"
          subtitle="AI/ML rainfall forecast"
          icon="◒"
          variant="blue"
        />

        <MetricCard
          title="Heavy Rainfall Probability"
          value={systemOverview.heavyRainProbability}
          unit="%"
          subtitle="Forecast confidence indicator"
          icon="◉"
          variant="warning"
        />

        <MetricCard
          title="Inundation Risk"
          value={systemOverview.inundationLevel}
          subtitle="Current regional risk"
          icon="⚠"
          status="HIGH"
          variant="danger"
        />

        <MetricCard
          title="Maximum Water Depth"
          value={systemOverview.maxWaterDepth}
          unit="m"
          subtitle="Predicted maximum"
          icon="▽"
        />

        <MetricCard
          title="Affected Area"
          value={systemOverview.affectedArea}
          unit="km²"
          subtitle="Predicted inundation"
          icon="◈"
          variant="blue"
        />

        <MetricCard
          title="Warning Lead Time"
          value={systemOverview.warningLeadTime}
          subtitle="Estimated advance warning"
          icon="◷"
          variant="success"
        />

        <MetricCard
          title="Active Alerts"
          value={systemOverview.activeAlerts}
          subtitle="Across monitored zones"
          icon="!"
          variant="danger"
        />

      </section>

      {/* MAP + ALERTS */}
      <section className="command-main-grid">

        <div className="command-map-section">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                GEOSPATIAL MONITORING
              </span>

              <h2>Integrated Risk Map</h2>
            </div>

            <div className="map-live-status">
              <span className="live-pulse"></span>
              Monitoring
            </div>

          </div>

          <RiskMap
            selectedZone={selectedZone}
            onZoneSelect={(zone) =>
              setSelectedZone(
                zone ? zone.id : null
              )
            }
          />

        </div>

        <AlertPanel
          onViewZone={handleViewZone}
          onFindRoute={handleFindRoute}
        />

      </section>

      {/* PIPELINE */}
      <section className="pipeline-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              END-TO-END EARLY WARNING PIPELINE
            </span>

            <h2>
              From Data Detection to Emergency Response
            </h2>
          </div>

          <span className="pipeline-demo">
            AI/ML DEMONSTRATION MODE
          </span>

        </div>

        <div className="pipeline-container">

          {pipelineSteps.map((step, index) => (

            <div
              className="pipeline-step-wrapper"
              key={step.number}
            >

              <div className="pipeline-step">

                <div className="pipeline-number">
                  {step.number}
                </div>

                <div className="pipeline-content">

                  <strong>
                    {step.title}
                  </strong>

                  <span>
                    {step.description}
                  </span>

                </div>

              </div>

              {index <
                pipelineSteps.length - 1 && (
                <div className="pipeline-arrow">
                  →
                </div>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* ZONE OVERVIEW */}
      <section className="zone-overview-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              MONITORED AREAS
            </span>

            <h2>
              Zone Risk Overview
            </h2>
          </div>

          <span className="zone-count">
            {zones.length} zones monitored
          </span>

        </div>

        <div className="zone-table-wrapper">

          <table className="zone-table">

            <thead>

              <tr>
                <th>Zone</th>
                <th>Risk</th>
                <th>Rainfall</th>
                <th>Water Depth</th>
                <th>
                  Inundation Probability
                </th>
                <th>Affected Area</th>
                <th>Population</th>
              </tr>

            </thead>

            <tbody>

              {zones.map((zone) => (

                <tr
                  key={zone.id}
                  className={
                    selectedZone === zone.id
                      ? "selected-row"
                      : ""
                  }
                  onClick={() =>
                    setSelectedZone(zone.id)
                  }
                >

                  <td>

                    <div className="zone-name-cell">

                      <strong>
                        {zone.name}
                      </strong>

                      <span>
                        {zone.id}
                      </span>

                    </div>

                  </td>

                  <td>

                    <span
                      className={`table-risk ${zone.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {zone.status}
                    </span>

                  </td>

                  <td>
                    {zone.rainfall} mm/hr
                  </td>

                  <td>
                    {zone.waterDepth} m
                  </td>

                  <td>

                    <div className="probability-cell">

                      <div className="probability-bar">

                        <span
                          style={{
                            width: `${zone.inundationProbability}%`
                          }}
                        ></span>

                      </div>

                      <strong>
                        {zone.inundationProbability}%
                      </strong>

                    </div>

                  </td>

                  <td>
                    {zone.affectedArea} km²
                  </td>

                  <td>
                    {zone.population.toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* TRANSPARENCY */}
      <section className="transparency-panel">

        <div className="transparency-icon">
          i
        </div>

        <div>

          <strong>
            DEMO MODE &amp; DATA TRANSPARENCY
          </strong>

          <p>
            This prototype uses simulated/demo data
            where live operational feeds are unavailable.
            The architecture is designed for integration
            with authorized satellite, radar,
            observational weather and NWP data sources.
          </p>

        </div>

      </section>

    </div>
  );
}

export default CommandCenter;