import { useState } from "react";
import {
  emergencyResources,
  hospitals,
  shelters,
  alerts
} from "../data/demoData";

function EmergencyResponse() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [notification, setNotification] = useState("");

  const responseTeams = [
    {
      id: "TEAM-01",
      name: "Rescue Team Alpha",
      type: "Flood Rescue",
      members: 8,
      location: "Central Urban Zone",
      status: "DEPLOYED",
      eta: "12 min"
    },
    {
      id: "TEAM-02",
      name: "Medical Team Bravo",
      type: "Emergency Medical",
      members: 6,
      location: "Eastern Lowland",
      status: "READY",
      eta: "18 min"
    },
    {
      id: "TEAM-03",
      name: "Response Team Charlie",
      type: "Evacuation Support",
      members: 10,
      location: "Northern Catchment",
      status: "READY",
      eta: "22 min"
    },
    {
      id: "TEAM-04",
      name: "Logistics Team Delta",
      type: "Relief Logistics",
      members: 7,
      location: "Western Residential",
      status: "STANDBY",
      eta: "28 min"
    }
  ];

  const responseTasks = [
    {
      id: "TASK-01",
      priority: "Critical",
      title: "Central Zone Evacuation",
      zone: "Central Urban Zone",
      team: "Rescue Team Alpha",
      status: "In Progress"
    },
    {
      id: "TASK-02",
      priority: "High",
      title: "Medical Resource Preparation",
      zone: "Eastern Lowland",
      team: "Medical Team Bravo",
      status: "Ready"
    },
    {
      id: "TASK-03",
      priority: "High",
      title: "Shelter Capacity Coordination",
      zone: "Northern Catchment",
      team: "Response Team Charlie",
      status: "Ready"
    },
    {
      id: "TASK-04",
      priority: "Moderate",
      title: "Relief Material Deployment",
      zone: "Western Residential",
      team: "Logistics Team Delta",
      status: "Standby"
    }
  ];

  const showNotification = (message) => {
    setNotification(message);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const getPriorityClass = (priority) => {
    if (priority === "Critical") {
      return "critical";
    }

    if (priority === "High") {
      return "warning";
    }

    return "moderate";
  };

  const getTeamStatusClass = (status) => {
    if (status === "DEPLOYED") {
      return "deployed";
    }

    if (status === "READY") {
      return "ready";
    }

    return "standby";
  };

  return (
    <div className="emergency-response-page">

      {notification && (
        <div className="command-notification">
          <span>✓</span>
          {notification}
        </div>
      )}

      <div className="page-heading">
        <div>
          <div className="page-kicker">
            DISASTER RESPONSE COORDINATION
          </div>

          <h1>Emergency Response</h1>

          <p>
            Coordinate evacuation, medical support,
            shelters and response teams using
            FloodGuard risk intelligence.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          DEMO RESPONSE CENTER
        </div>
      </div>

      <section className="response-metrics-grid">

        <div className="response-metric-card">
          <div className="response-metric-icon">👥</div>

          <div>
            <span>Affected Population</span>
            <strong>
              {emergencyResources.affectedPopulation.toLocaleString()}
            </strong>
            <small>Estimated across monitored zones</small>
          </div>
        </div>

        <div className="response-metric-card">
          <div className="response-metric-icon">🏥</div>

          <div>
            <span>Hospitals</span>
            <strong>{emergencyResources.hospitals}</strong>
            <small>Emergency facilities monitored</small>
          </div>
        </div>

        <div className="response-metric-card">
          <div className="response-metric-icon">⛺</div>

          <div>
            <span>Shelters</span>
            <strong>{emergencyResources.shelters}</strong>
            <small>Relief locations available</small>
          </div>
        </div>

        <div className="response-metric-card">
          <div className="response-metric-icon">⛔</div>

          <div>
            <span>Blocked Roads</span>
            <strong>{emergencyResources.blockedRoads}</strong>
            <small>Simulated road closures</small>
          </div>
        </div>

        <div className="response-metric-card">
          <div className="response-metric-icon">🌉</div>

          <div>
            <span>Critical Bridges</span>
            <strong>{emergencyResources.criticalBridges}</strong>
            <small>Requiring monitoring</small>
          </div>
        </div>

        <div className="response-metric-card">
          <div className="response-metric-icon">🆘</div>

          <div>
            <span>Rescue Requests</span>
            <strong>{emergencyResources.rescueRequests}</strong>
            <small>Current simulated requests</small>
          </div>
        </div>

        <div className="response-metric-card">
          <div className="response-metric-icon">🚑</div>

          <div>
            <span>Active Teams</span>
            <strong>{emergencyResources.activeResponseTeams}</strong>
            <small>Response resources</small>
          </div>
        </div>

        <div className="response-metric-card">
          <div className="response-metric-icon">⚠</div>

          <div>
            <span>Active Alerts</span>
            <strong>{alerts.length}</strong>
            <small>Requiring monitoring</small>
          </div>
        </div>

      </section>

      <section className="response-main-grid">

        <div className="response-map-card">

          <div className="section-card-header">
            <div>
              <span className="section-kicker">
                RESPONSE OPERATIONS MAP
              </span>

              <h2>Emergency Situation Map</h2>
            </div>

            <div className="map-live-status">
              <span className="live-pulse"></span>
              Operations View
            </div>
          </div>

          <div className="response-map-visual">

            <div className="response-map-grid"></div>

            <div className="response-map-water response-water-one"></div>
            <div className="response-map-water response-water-two"></div>

            <div className="response-map-road response-road-one"></div>
            <div className="response-map-road response-road-two"></div>
            <div className="response-map-road response-road-three"></div>
            <div className="response-map-road response-road-four"></div>

            <div className="response-zone response-zone-critical">
              <span>Z-01</span>
              <strong>94</strong>
            </div>

            <div className="response-zone response-zone-severe">
              <span>Z-02</span>
              <strong>86</strong>
            </div>

            <div className="response-zone response-zone-high">
              <span>Z-03</span>
              <strong>73</strong>
            </div>

            <div className="response-team-marker team-marker-one">
              🚑
              <span>Alpha</span>
            </div>

            <div className="response-team-marker team-marker-two">
              🚑
              <span>Bravo</span>
            </div>

            <div className="response-team-marker team-marker-three">
              🚒
              <span>Charlie</span>
            </div>

            <div className="response-map-hospital response-hospital-one">
              H
            </div>

            <div className="response-map-hospital response-hospital-two">
              H
            </div>

            <div className="response-map-shelter response-shelter-one">
              S
            </div>

            <div className="response-map-shelter response-shelter-two">
              S
            </div>

            <div className="response-map-controls">
              <button type="button">+</button>
              <button type="button">−</button>
            </div>

            <div className="response-map-location">
              ◎
            </div>

            <div className="response-map-label">
              DEMO GIS • RESPONSE OPERATIONS
            </div>

          </div>

          <div className="response-map-footer">

            <span>
              <i className="response-legend-critical"></i>
              Critical Zone
            </span>

            <span>
              <i className="response-legend-team"></i>
              Response Team
            </span>

            <span>
              <i className="response-legend-hospital"></i>
              Hospital
            </span>

            <span>
              <i className="response-legend-shelter"></i>
              Shelter
            </span>

          </div>

        </div>

        <div className="response-status-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                OPERATIONAL STATUS
              </span>

              <h2>Response Readiness</h2>
            </div>

          </div>

          <div className="readiness-score">

            <div className="readiness-circle">
              <strong>82%</strong>
              <span>Ready</span>
            </div>

            <div className="readiness-description">
              <strong>
                Response network operational
              </strong>

              <p>
                Most simulated response resources
                are available for deployment.
              </p>
            </div>

          </div>

          <div className="readiness-items">

            <div>
              <span>Rescue Teams</span>
              <strong>4 / 4</strong>
            </div>

            <div>
              <span>Medical Support</span>
              <strong>3 / 3</strong>
            </div>

            <div>
              <span>Shelter Network</span>
              <strong>14 / 14</strong>
            </div>

            <div>
              <span>Routing Engine</span>
              <strong>ONLINE</strong>
            </div>

          </div>

          <div className="response-status-notice">
            <span>✓</span>

            <p>
              No live emergency deployment is
              performed by this prototype.
            </p>
          </div>

        </div>

      </section>

      <section className="response-task-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              RESPONSE TASK QUEUE
            </span>

            <h2>Priority Operations</h2>
          </div>

          <span className="zone-count">
            {responseTasks.length} tasks
          </span>

        </div>

        <div className="response-task-table-wrapper">

          <table className="response-task-table">

            <thead>
              <tr>
                <th>Priority</th>
                <th>Operation</th>
                <th>Zone</th>
                <th>Assigned Team</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {responseTasks.map((task) => (
                <tr key={task.id}>

                  <td>
                    <span
                      className={`response-priority ${getPriorityClass(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </td>

                  <td>
                    <div className="response-task-name">
                      <strong>{task.title}</strong>
                      <span>{task.id}</span>
                    </div>
                  </td>

                  <td>{task.zone}</td>

                  <td>{task.team}</td>

                  <td>
                    <span className="response-task-status">
                      {task.status}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="table-action-button"
                      onClick={() =>
                        showNotification(
                          `${task.title} selected for coordination`
                        )
                      }
                    >
                      Coordinate
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>

      <section className="response-team-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              FIELD RESOURCES
            </span>

            <h2>Response Teams</h2>
          </div>

          <span className="zone-count">
            {responseTeams.length} teams
          </span>

        </div>

        <div className="response-team-grid">

          {responseTeams.map((team) => (

            <button
              type="button"
              key={team.id}
              className={`response-team-card ${
                selectedTeam &&
                selectedTeam.id === team.id
                  ? "selected"
                  : ""
              }`}
              onClick={() => setSelectedTeam(team)}
            >

              <div className="response-team-card-top">

                <div className="response-team-icon">
                  {team.type === "Emergency Medical"
                    ? "🏥"
                    : team.type === "Relief Logistics"
                      ? "📦"
                      : "🚑"}
                </div>

                <span
                  className={`team-status ${getTeamStatusClass(
                    team.status
                  )}`}
                >
                  {team.status}
                </span>

              </div>

              <h3>{team.name}</h3>

              <span className="response-team-type">
                {team.type}
              </span>

              <div className="response-team-details">

                <div>
                  <span>Members</span>
                  <strong>{team.members}</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>{team.location}</strong>
                </div>

                <div>
                  <span>ETA</span>
                  <strong>{team.eta}</strong>
                </div>

              </div>

            </button>

          ))}

        </div>

      </section>

      <section className="response-facilities-grid">

        <div className="response-facility-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                MEDICAL FACILITIES
              </span>

              <h2>Hospital Status</h2>
            </div>

            <span className="zone-count">
              {hospitals.length} monitored
            </span>

          </div>

          <div className="facility-list">

            {hospitals.map((hospital) => (

              <div
                className="facility-item"
                key={hospital.name}
              >

                <div className="facility-icon">
                  H
                </div>

                <div className="facility-content">
                  <strong>{hospital.name}</strong>
                  <span>{hospital.type}</span>
                </div>

                <div className="facility-capacity">
                  <span>Capacity</span>
                  <strong>{hospital.capacity}</strong>
                </div>

                <span
                  className={`facility-status ${
                    hospital.status === "Warning"
                      ? "warning"
                      : "operational"
                  }`}
                >
                  {hospital.status}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="response-facility-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                RELIEF FACILITIES
              </span>

              <h2>Shelter Status</h2>
            </div>

            <span className="zone-count">
              {shelters.length} monitored
            </span>

          </div>

          <div className="facility-list">

            {shelters.map((shelter) => {

              const occupancy = Math.round(
                (shelter.occupied / shelter.capacity) *
                  100
              );

              return (
                <div
                  className="facility-item"
                  key={shelter.name}
                >

                  <div className="facility-icon shelter">
                    S
                  </div>

                  <div className="facility-content">
                    <strong>{shelter.name}</strong>
                    <span>Relief shelter</span>
                  </div>

                  <div className="facility-capacity">
                    <span>Occupancy</span>
                    <strong>{occupancy}%</strong>
                  </div>

                  <span
                    className={`facility-status ${
                      shelter.status === "Nearly Full"
                        ? "warning"
                        : "operational"
                    }`}
                  >
                    {shelter.status}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      <section className="response-pipeline-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              RESPONSE AUTOMATION
            </span>

            <h2>
              Warning-to-Response Workflow
            </h2>
          </div>

          <span className="pipeline-demo">
            AI/ML DEMONSTRATION MODE
          </span>

        </div>

        <div className="response-pipeline">

          <div className="response-pipeline-step">
            <div>01</div>
            <strong>ALERT</strong>
            <span>Detect critical risk</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="response-pipeline-step">
            <div>02</div>
            <strong>PRIORITIZE</strong>
            <span>Rank affected zones</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="response-pipeline-step">
            <div>03</div>
            <strong>ROUTE</strong>
            <span>Identify safer access</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="response-pipeline-step">
            <div>04</div>
            <strong>DEPLOY</strong>
            <span>Coordinate response teams</span>
          </div>

          <div className="pipeline-arrow">→</div>

          <div className="response-pipeline-step">
            <div>05</div>
            <strong>RESPOND</strong>
            <span>Support emergency operations</span>
          </div>

        </div>

      </section>

      <section className="transparency-panel">

        <div className="transparency-icon">
          i
        </div>

        <div>
          <strong>
            EMERGENCY RESPONSE TRANSPARENCY
          </strong>

          <p>
            All response teams, locations, rescue
            requests, facility capacities and operational
            actions shown in this prototype are simulated.
            No real emergency deployment or communication
            is performed.
          </p>
        </div>

      </section>

    </div>
  );
}

export default EmergencyResponse;