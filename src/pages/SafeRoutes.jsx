import { useState } from "react";
import { routes, zones, shelters } from "../data/demoData";

function SafeRoutes() {
  const [selectedRoute, setSelectedRoute] = useState(routes[0]);
  const [startZone, setStartZone] = useState(zones[0].name);
  const [destination, setDestination] = useState(
    shelters[0].name
  );
  const [routeCalculated, setRouteCalculated] = useState(true);
  const [notification, setNotification] = useState("");

  const handleCalculateRoute = () => {
    setRouteCalculated(false);

    setTimeout(() => {
      setRouteCalculated(true);

      setNotification(
        `Risk-aware routes calculated from ${startZone}`
      );

      setTimeout(() => {
        setNotification("");
      }, 3000);
    }, 700);
  };

  const getRiskClass = (risk) => {
    const value = risk.toLowerCase();

    if (value === "low") return "low";
    if (value === "moderate") return "moderate";
    if (value === "high") return "high";

    return "moderate";
  };

  return (
    <div className="safe-routes-page">

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
            RISK-AWARE NAVIGATION
          </div>

          <h1>
            Safe Routes
          </h1>

          <p>
            Calculate evacuation and emergency routes
            using flood risk, blocked roads and nearby
            shelters.
          </p>

        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          DEMO ROUTING ENGINE
        </div>

      </div>

      {/* ROUTE CONTROLS */}
      <section className="route-control-card">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              ROUTE CALCULATION
            </span>

            <h2>
              Emergency Route Planner
            </h2>
          </div>

          <span className="pipeline-demo">
            RISK-AWARE
          </span>

        </div>

        <div className="route-control-grid">

          <div className="route-input-group">

            <label>
              Start Zone
            </label>

            <select
              value={startZone}
              onChange={(event) =>
                setStartZone(event.target.value)
              }
            >
              {zones.map((zone) => (
                <option
                  key={zone.id}
                  value={zone.name}
                >
                  {zone.name}
                </option>
              ))}
            </select>

          </div>

          <div className="route-direction">
            →
          </div>

          <div className="route-input-group">

            <label>
              Destination / Shelter
            </label>

            <select
              value={destination}
              onChange={(event) =>
                setDestination(event.target.value)
              }
            >
              {shelters.map((shelter) => (
                <option
                  key={shelter.name}
                  value={shelter.name}
                >
                  {shelter.name}
                </option>
              ))}
            </select>

          </div>

          <button
            type="button"
            className="route-calculate-button"
            onClick={handleCalculateRoute}
          >
            {routeCalculated
              ? "Calculate Safe Route"
              : "Calculating..."}
          </button>

        </div>

      </section>

      {/* MAIN ROUTE AREA */}
      <section className="routes-main-grid">

        {/* MAP */}
        <div className="routes-map-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                GIS ROUTE ANALYSIS
              </span>

              <h2>
                Evacuation Route Map
              </h2>
            </div>

            <div className="map-live-status">
              <span className="live-pulse"></span>
              Route Engine Ready
            </div>

          </div>

          <div className="routes-map-visual">

            <div className="route-map-grid"></div>

            {/* WATER AREAS */}
            <div className="route-water route-water-one"></div>
            <div className="route-water route-water-two"></div>

            {/* ROADS */}
            <div className="route-road route-road-one"></div>
            <div className="route-road route-road-two"></div>
            <div className="route-road route-road-three"></div>
            <div className="route-road route-road-four"></div>
            <div className="route-road route-road-five"></div>

            {/* BLOCKED ROADS */}
            <div className="blocked-road blocked-road-one">
              BLOCKED
            </div>

            <div className="blocked-road blocked-road-two">
              BLOCKED
            </div>

            {/* ROUTE A */}
            <div
              className={`simulated-route route-a ${
                selectedRoute.id === "R-01"
                  ? "selected"
                  : ""
              }`}
            >
              <span>ROUTE A</span>
            </div>

            {/* ROUTE B */}
            <div
              className={`simulated-route route-b ${
                selectedRoute.id === "R-02"
                  ? "selected"
                  : ""
              }`}
            >
              <span>ROUTE B</span>
            </div>

            {/* ROUTE C */}
            <div
              className={`simulated-route route-c ${
                selectedRoute.id === "R-03"
                  ? "selected"
                  : ""
              }`}
            >
              <span>ROUTE C</span>
            </div>

            {/* START */}
            <div className="route-marker route-start">
              <span>START</span>
              <strong>●</strong>
            </div>

            {/* DESTINATION */}
            <div className="route-marker route-destination">
              <span>SHELTER</span>
              <strong>◆</strong>
            </div>

            {/* HOSPITAL */}
            <div className="route-map-hospital">
              H
            </div>

            {/* SHELTERS */}
            <div className="route-map-shelter shelter-one">
              S
            </div>

            <div className="route-map-shelter shelter-two">
              S
            </div>

            {/* MAP CONTROLS */}
            <div className="route-map-controls">

              <button type="button">
                +
              </button>

              <button type="button">
                −
              </button>

            </div>

            <div className="route-map-location">
              ◎
            </div>

            <div className="route-map-label">
              DEMO GIS • FLOODGUARD AI
            </div>

          </div>

          <div className="route-map-footer">

            <div className="route-map-legend">

              <span>
                <i className="route-legend-safe"></i>
                Safe
              </span>

              <span>
                <i className="route-legend-moderate"></i>
                Moderate Risk
              </span>

              <span>
                <i className="route-legend-danger"></i>
                High Risk
              </span>

              <span>
                <i className="route-legend-blocked"></i>
                Blocked
              </span>

            </div>

            <span className="map-data-status">
              <span className="status-dot"></span>
              Simulated road conditions
            </span>

          </div>

        </div>

        {/* ROUTE RESULTS */}
        <div className="route-results-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                ROUTE OPTIONS
              </span>

              <h2>
                Recommended Routes
              </h2>
            </div>

            <span className="zone-count">
              {routes.length} routes
            </span>

          </div>

          <div className="route-results-list">

            {routes.map((route) => {

              const riskClass =
                getRiskClass(route.risk);

              return (
                <button
                  type="button"
                  key={route.id}
                  className={`route-result-item ${
                    selectedRoute.id === route.id
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedRoute(route)
                  }
                >

                  <div className="route-result-top">

                    <div className="route-result-name">

                      <span>
                        {route.id}
                      </span>

                      <strong>
                        {route.name}
                      </strong>

                    </div>

                    <span
                      className={`route-risk-badge ${riskClass}`}
                    >
                      {route.risk}
                    </span>

                  </div>

                  <div className="route-result-stats">

                    <div>
                      <span>
                        Distance
                      </span>

                      <strong>
                        {route.distance}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Time
                      </span>

                      <strong>
                        {route.duration}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Blocked Roads
                      </span>

                      <strong>
                        {route.blockedRoads}
                      </strong>
                    </div>

                  </div>

                  <div className="route-risk-score">

                    <span>
                      Risk Score
                    </span>

                    <div className="route-score-bar">

                      <span
                        style={{
                          width: `${route.riskScore}%`
                        }}
                      ></span>

                    </div>

                    <strong>
                      {route.riskScore}/100
                    </strong>

                  </div>

                  <div className="route-result-footer">

                    <span>
                      Shelters nearby:
                      {" "}
                      <strong>
                        {route.sheltersNearby}
                      </strong>
                    </span>

                    <span>
                      View route →
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

        </div>

      </section>

      {/* SELECTED ROUTE DETAILS */}
      <section className="selected-route-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              SELECTED ROUTE
            </span>

            <h2>
              {selectedRoute.name} — Route Assessment
            </h2>
          </div>

          <span
            className={`route-risk-badge ${getRiskClass(
              selectedRoute.risk
            )}`}
          >
            {selectedRoute.risk} Risk
          </span>

        </div>

        <div className="selected-route-grid">

          <div className="selected-route-metric">

            <span>
              Total Distance
            </span>

            <strong>
              {selectedRoute.distance}
            </strong>

            <small>
              Estimated travel distance
            </small>

          </div>

          <div className="selected-route-metric">

            <span>
              Travel Time
            </span>

            <strong>
              {selectedRoute.duration}
            </strong>

            <small>
              Under current conditions
            </small>

          </div>

          <div className="selected-route-metric">

            <span>
              Risk Score
            </span>

            <strong>
              {selectedRoute.riskScore}/100
            </strong>

            <small>
              Lower score indicates lower risk
            </small>

          </div>

          <div className="selected-route-metric">

            <span>
              Blocked Roads
            </span>

            <strong>
              {selectedRoute.blockedRoads}
            </strong>

            <small>
              Simulated road closures
            </small>

          </div>

          <div className="selected-route-metric">

            <span>
              Nearby Shelters
            </span>

            <strong>
              {selectedRoute.sheltersNearby}
            </strong>

            <small>
              Available along route
            </small>

          </div>

        </div>

      </section>

      {/* ROUTING LOGIC */}
      <section className="routing-logic-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              ROUTING INTELLIGENCE
            </span>

            <h2>
              How FloodGuard Calculates Safer Routes
            </h2>
          </div>

          <span className="pipeline-demo">
            DEMO ENGINE
          </span>

        </div>

        <div className="routing-logic-grid">

          <div className="routing-logic-step">

            <div className="routing-step-number">
              01
            </div>

            <div>

              <strong>
                Flood Risk
              </strong>

              <p>
                Identify roads passing through
                predicted high-risk inundation zones.
              </p>

            </div>

          </div>

          <div className="routing-logic-step">

            <div className="routing-step-number">
              02
            </div>

            <div>

              <strong>
                Road Status
              </strong>

              <p>
                Consider simulated blocked roads,
                bridges and critical infrastructure.
              </p>

            </div>

          </div>

          <div className="routing-logic-step">

            <div className="routing-step-number">
              03
            </div>

            <div>

              <strong>
                Safe Destination
              </strong>

              <p>
                Identify shelters, hospitals and
                emergency destinations.
              </p>

            </div>

          </div>

          <div className="routing-logic-step">

            <div className="routing-step-number">
              04
            </div>

            <div>

              <strong>
                Route Scoring
              </strong>

              <p>
                Combine distance, travel time and
                flood risk into a route score.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* DESTINATION STATUS */}
      <section className="shelter-route-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              EMERGENCY DESTINATIONS
            </span>

            <h2>
              Shelter Availability
            </h2>
          </div>

          <span className="zone-count">
            {shelters.length} shelters
          </span>

        </div>

        <div className="shelter-route-grid">

          {shelters.map((shelter) => {

            const occupancy =
              Math.round(
                (shelter.occupied /
                  shelter.capacity) *
                  100
              );

            return (
              <div
                className="shelter-route-card"
                key={shelter.name}
              >

                <div className="shelter-route-top">

                  <div className="shelter-route-icon">
                    S
                  </div>

                  <span
                    className={`shelter-status ${
                      shelter.status ===
                      "Nearly Full"
                        ? "warning"
                        : "open"
                    }`}
                  >
                    {shelter.status}
                  </span>

                </div>

                <h3>
                  {shelter.name}
                </h3>

                <div className="shelter-capacity">

                  <div className="shelter-capacity-header">

                    <span>
                      Occupancy
                    </span>

                    <strong>
                      {occupancy}%
                    </strong>

                  </div>

                  <div className="shelter-capacity-bar">

                    <span
                      style={{
                        width: `${occupancy}%`
                      }}
                    ></span>

                  </div>

                  <small>
                    {shelter.occupied.toLocaleString()}
                    {" "}
                    /{" "}
                    {shelter.capacity.toLocaleString()}
                    {" "}
                    people
                  </small>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* TRANSPARENCY */}
      <section className="transparency-panel">

        <div className="transparency-icon">
          i
        </div>

        <div>

          <strong>
            ROUTING TRANSPARENCY
          </strong>

          <p>
            Route conditions, blocked roads and
            shelter availability shown in this prototype
            are simulated demonstration data. Production
            deployment would integrate authorized GIS,
            road-status, flood-risk and emergency
            infrastructure data.
          </p>

        </div>

      </section>

    </div>
  );
}

export default SafeRoutes;