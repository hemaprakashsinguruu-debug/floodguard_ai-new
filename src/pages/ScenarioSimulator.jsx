import { useMemo, useState } from "react";
import { zones } from "../data/demoData";

function ScenarioSimulator() {
  const [rainfallMultiplier, setRainfallMultiplier] = useState(1);
  const [duration, setDuration] = useState(3);
  const [drainageStress, setDrainageStress] = useState(50);
  const [selectedZone, setSelectedZone] = useState(zones[0]);
  const [simulationRunning, setSimulationRunning] = useState(false);

  const simulation = useMemo(() => {
    const rainfall = Math.round(
      86 * rainfallMultiplier
    );

    const forecastRainfall = Math.round(
      142 * rainfallMultiplier
    );

    const depth = Math.min(
      2.5,
      0.84 *
        rainfallMultiplier *
        (1 + drainageStress / 250) *
        (duration / 3)
    );

    const affectedArea = Math.min(
      50,
      18.6 *
        rainfallMultiplier *
        (1 + drainageStress / 300) *
        (duration / 3)
    );

    const probability = Math.min(
      99,
      Math.round(
        91 +
          (rainfallMultiplier - 1) * 18 +
          (drainageStress - 50) * 0.08 +
          (duration - 3) * 2
      )
    );

    let risk = "Low";

    if (probability >= 90) {
      risk = "Critical";
    } else if (probability >= 76) {
      risk = "Severe";
    } else if (probability >= 51) {
      risk = "High";
    } else if (probability >= 31) {
      risk = "Moderate";
    }

    return {
      rainfall,
      forecastRainfall,
      depth: depth.toFixed(2),
      affectedArea: affectedArea.toFixed(1),
      probability,
      risk
    };
  }, [
    rainfallMultiplier,
    duration,
    drainageStress
  ]);

  const runSimulation = () => {
    setSimulationRunning(true);

    setTimeout(() => {
      setSimulationRunning(false);
    }, 2500);
  };

  const resetSimulation = () => {
    setRainfallMultiplier(1);
    setDuration(3);
    setDrainageStress(50);
    setSelectedZone(zones[0]);
    setSimulationRunning(false);
  };

  return (
    <div className="scenario-simulator-page">

      {/* PAGE HEADER */}
      <div className="page-heading">

        <div>
          <div className="page-kicker">
            WHAT-IF FLOOD SCENARIO ANALYSIS
          </div>

          <h1>
            Scenario Simulator
          </h1>

          <p>
            Test rainfall and drainage scenarios to
            understand their potential effect on
            inundation risk.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          SIMULATION MODE
        </div>

      </div>

      {/* SIMULATOR LAYOUT */}
      <section className="simulator-main-grid">

        {/* CONTROLS */}
        <div className="simulator-controls-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                SCENARIO PARAMETERS
              </span>

              <h2>
                Configure Scenario
              </h2>
            </div>

            <span className="model-demo-badge">
              DEMO
            </span>

          </div>

          {/* RAINFALL */}
          <div className="simulator-control">

            <div className="control-header">

              <div>
                <span>
                  Rainfall Intensity
                </span>

                <small>
                  Multiplier applied to forecast rainfall
                </small>
              </div>

              <strong>
                {rainfallMultiplier.toFixed(1)}×
              </strong>

            </div>

            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rainfallMultiplier}
              onChange={(event) =>
                setRainfallMultiplier(
                  Number(event.target.value)
                )
              }
            />

            <div className="range-labels">
              <span>
                0.5×
              </span>

              <span>
                Normal
              </span>

              <span>
                2.0×
              </span>
            </div>

          </div>

          {/* DURATION */}
          <div className="simulator-control">

            <div className="control-header">

              <div>
                <span>
                  Rainfall Duration
                </span>

                <small>
                  Duration of heavy rainfall
                </small>
              </div>

              <strong>
                {duration} hours
              </strong>

            </div>

            <input
              type="range"
              min="1"
              max="6"
              step="1"
              value={duration}
              onChange={(event) =>
                setDuration(
                  Number(event.target.value)
                )
              }
            />

            <div className="range-labels">
              <span>
                1h
              </span>

              <span>
                3h
              </span>

              <span>
                6h
              </span>
            </div>

          </div>

          {/* DRAINAGE */}
          <div className="simulator-control">

            <div className="control-header">

              <div>
                <span>
                  Drainage Network Stress
                </span>

                <small>
                  Represents drainage capacity pressure
                </small>
              </div>

              <strong>
                {drainageStress}%
              </strong>

            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={drainageStress}
              onChange={(event) =>
                setDrainageStress(
                  Number(event.target.value)
                )
              }
            />

            <div className="range-labels">
              <span>
                Low
              </span>

              <span>
                Moderate
              </span>

              <span>
                Severe
              </span>
            </div>

          </div>

          {/* ZONE */}
          <div className="simulator-control">

            <div className="control-header">

              <div>
                <span>
                  Target Zone
                </span>

                <small>
                  Area for scenario assessment
                </small>
              </div>

            </div>

            <div className="zone-selector">

              {zones.map((zone) => (

                <button
                  type="button"
                  key={zone.id}
                  className={
                    selectedZone.id === zone.id
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedZone(zone)
                  }
                >
                  {zone.id}
                </button>

              ))}

            </div>

            <div className="selected-zone-preview">

              <span>
                Selected Area
              </span>

              <strong>
                {selectedZone.name}
              </strong>

              <small>
                Current risk: {selectedZone.risk}/100
              </small>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="simulator-actions">

            <button
              type="button"
              className="simulation-run-button"
              onClick={runSimulation}
              disabled={simulationRunning}
            >
              {simulationRunning
                ? "Running Simulation..."
                : "▶ Run Simulation"}
            </button>

            <button
              type="button"
              className="simulation-reset-button"
              onClick={resetSimulation}
            >
              Reset
            </button>

          </div>

          <div className="simulation-notice">

            <span>
              i
            </span>

            <p>
              This simulator generates deterministic
              demonstration outputs. It does not represent
              an operational flood forecast.
            </p>

          </div>

        </div>

        {/* RESULTS */}
        <div className="simulator-results-card">

          <div className="section-card-header">

            <div>
              <span className="section-kicker">
                SIMULATION OUTPUT
              </span>

              <h2>
                Predicted Scenario Impact
              </h2>
            </div>

            <span
              className={`table-risk ${simulation.risk.toLowerCase()}`}
            >
              {simulation.risk}
            </span>

          </div>

          {/* MAIN RISK */}
          <div className="simulation-risk-display">

            <div className="simulation-risk-circle">

              <strong>
                {simulation.probability}
              </strong>

              <span>
                %
              </span>

            </div>

            <div>

              <span>
                Inundation Probability
              </span>

              <strong>
                {simulation.risk} Risk Scenario
              </strong>

              <small>
                {selectedZone.name}
              </small>

            </div>

          </div>

          <div className="simulation-risk-bar">

            <span
              style={{
                width: `${simulation.probability}%`
              }}
            ></span>

          </div>

          {/* RESULT METRICS */}
          <div className="simulation-result-grid">

            <div className="simulation-result-card">

              <span>
                Current Rainfall
              </span>

              <strong>
                {simulation.rainfall}
              </strong>

              <small>
                mm/hr
              </small>

            </div>

            <div className="simulation-result-card">

              <span>
                Forecast Rainfall
              </span>

              <strong>
                {simulation.forecastRainfall}
              </strong>

              <small>
                mm
              </small>

            </div>

            <div className="simulation-result-card">

              <span>
                Maximum Depth
              </span>

              <strong>
                {simulation.depth}
              </strong>

              <small>
                m
              </small>

            </div>

            <div className="simulation-result-card">

              <span>
                Affected Area
              </span>

              <strong>
                {simulation.affectedArea}
              </strong>

              <small>
                km²
              </small>

            </div>

          </div>

          {/* SCENARIO SUMMARY */}
          <div className="scenario-summary">

            <div className="scenario-summary-header">

              <span>
                Scenario Configuration
              </span>

              <strong>
                ACTIVE
              </strong>

            </div>

            <div className="scenario-summary-row">

              <span>
                Rainfall Multiplier
              </span>

              <strong>
                {rainfallMultiplier.toFixed(1)}×
              </strong>

            </div>

            <div className="scenario-summary-row">

              <span>
                Rainfall Duration
              </span>

              <strong>
                {duration} hours
              </strong>

            </div>

            <div className="scenario-summary-row">

              <span>
                Drainage Stress
              </span>

              <strong>
                {drainageStress}%
              </strong>

            </div>

            <div className="scenario-summary-row">

              <span>
                Target Zone
              </span>

              <strong>
                {selectedZone.id}
              </strong>

            </div>

          </div>

        </div>

      </section>

      {/* IMPACT INTERPRETATION */}
      <section className="scenario-impact-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              IMPACT INTERPRETATION
            </span>

            <h2>
              Scenario Response Assessment
            </h2>
          </div>

          <span className="pipeline-demo">
            SIMULATED OUTPUT
          </span>

        </div>

        <div className="scenario-impact-grid">

          <div className="impact-card">

            <div className="impact-icon">
              🌧️
            </div>

            <div>

              <span>
                Rainfall Pressure
              </span>

              <strong>
                {rainfallMultiplier >= 1.5
                  ? "Very High"
                  : rainfallMultiplier >= 1.2
                    ? "High"
                    : "Moderate"}
              </strong>

              <p>
                Increased rainfall intensity raises
                the potential for rapid surface water
                accumulation.
              </p>

            </div>

          </div>

          <div className="impact-card">

            <div className="impact-icon">
              ≋
            </div>

            <div>

              <span>
                Drainage Pressure
              </span>

              <strong>
                {drainageStress >= 75
                  ? "Severe"
                  : drainageStress >= 50
                    ? "High"
                    : "Moderate"}
              </strong>

              <p>
                Higher drainage stress can increase
                water accumulation and prolong
                inundation.
              </p>

            </div>

          </div>

          <div className="impact-card">

            <div className="impact-icon">
              ⚠
            </div>

            <div>

              <span>
                Flood Risk
              </span>

              <strong>
                {simulation.risk}
              </strong>

              <p>
                The simulated risk level is derived
                from the configured scenario parameters.
              </p>

            </div>

          </div>

          <div className="impact-card">

            <div className="impact-icon">
              ⏱
            </div>

            <div>

              <span>
                Response Priority
              </span>

              <strong>
                {simulation.probability >= 90
                  ? "Immediate Monitoring"
                  : simulation.probability >= 75
                    ? "High Priority"
                    : "Routine Monitoring"}
              </strong>

              <p>
                Response priority can be linked to
                warning and emergency workflows.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SCENARIO WORKFLOW */}
      <section className="scenario-workflow-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              DECISION SUPPORT WORKFLOW
            </span>

            <h2>
              Scenario to Action
            </h2>
          </div>

        </div>

        <div className="scenario-workflow">

          <div className="workflow-step">

            <div>
              01
            </div>

            <strong>
              Configure
            </strong>

            <span>
              Set rainfall and drainage conditions
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="workflow-step">

            <div>
              02
            </div>

            <strong>
              Simulate
            </strong>

            <span>
              Generate predicted inundation outputs
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="workflow-step">

            <div>
              03
            </div>

            <strong>
              Assess
            </strong>

            <span>
              Identify affected zones and risk
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="workflow-step">

            <div>
              04
            </div>

            <strong>
              Warn
            </strong>

            <span>
              Support early-warning decisions
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="workflow-step">

            <div>
              05
            </div>

            <strong>
              Respond
            </strong>

            <span>
              Plan routes and emergency actions
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
            SCENARIO SIMULATOR TRANSPARENCY
          </strong>

          <p>
            This tool is a deterministic demonstration
            simulator. The outputs are intended to show
            how rainfall intensity, rainfall duration and
            drainage conditions can influence flood-risk
            calculations. It is not an operational
            prediction model.
          </p>

        </div>

      </section>

    </div>
  );
}

export default ScenarioSimulator;