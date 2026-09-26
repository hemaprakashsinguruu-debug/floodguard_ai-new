import { useState } from "react";
import { validationData } from "../data/demoData";

function HistoricalValidation() {
  const [selectedEvent, setSelectedEvent] = useState(
    validationData[0]
  );

  const averageIoU =
    validationData.reduce(
      (sum, item) => sum + item.iou,
      0
    ) / validationData.length;

  const averagePrecision =
    validationData.reduce(
      (sum, item) => sum + item.precision,
      0
    ) / validationData.length;

  const averageRecall =
    validationData.reduce(
      (sum, item) => sum + item.recall,
      0
    ) / validationData.length;

  const averageDepthMae =
    validationData.reduce(
      (sum, item) => sum + item.depthMae,
      0
    ) / validationData.length;

  const formatPercentage = (value) =>
    `${Math.round(value * 100)}%`;

  return (
    <div className="historical-validation-page">

      {/* PAGE HEADER */}
      <div className="page-heading">

        <div>

          <div className="page-kicker">
            MODEL VALIDATION &amp; PERFORMANCE
          </div>

          <h1>
            Historical Validation
          </h1>

          <p>
            Compare simulated flood predictions with
            historical reference events to demonstrate
            the validation workflow.
          </p>

        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          DEMO VALIDATION DATA
        </div>

      </div>

      {/* VALIDATION SUMMARY */}
      <section className="validation-summary-grid">

        <div className="validation-summary-card">

          <span>
            Mean IoU
          </span>

          <strong>
            {formatPercentage(averageIoU)}
          </strong>

          <small>
            Flood extent overlap
          </small>

        </div>

        <div className="validation-summary-card">

          <span>
            Mean Precision
          </span>

          <strong>
            {formatPercentage(averagePrecision)}
          </strong>

          <small>
            Predicted flood area accuracy
          </small>

        </div>

        <div className="validation-summary-card">

          <span>
            Mean Recall
          </span>

          <strong>
            {formatPercentage(averageRecall)}
          </strong>

          <small>
            Observed flood area captured
          </small>

        </div>

        <div className="validation-summary-card">

          <span>
            Mean Depth MAE
          </span>

          <strong>
            {averageDepthMae.toFixed(2)} m
          </strong>

          <small>
            Water-depth error indicator
          </small>

        </div>

      </section>

      {/* VALIDATION TABLE */}
      <section className="validation-table-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              HISTORICAL EVENT COMPARISON
            </span>

            <h2>
              Observed vs Predicted Results
            </h2>
          </div>

          <span className="pipeline-demo">
            SIMULATED DATA
          </span>

        </div>

        <div className="validation-table-wrapper">

          <table className="validation-table">

            <thead>

              <tr>
                <th>Event</th>
                <th>Observed Extent</th>
                <th>Predicted Extent</th>
                <th>IoU</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>Depth MAE</th>
              </tr>

            </thead>

            <tbody>

              {validationData.map((event) => (

                <tr
                  key={event.event}
                  className={
                    selectedEvent.event === event.event
                      ? "selected-row"
                      : ""
                  }
                  onClick={() =>
                    setSelectedEvent(event)
                  }
                >

                  <td>

                    <div className="validation-event-name">

                      <strong>
                        {event.event}
                      </strong>

                      <span>
                        Historical reference
                      </span>

                    </div>

                  </td>

                  <td>
                    {event.observedExtent} km²
                  </td>

                  <td>
                    {event.predictedExtent} km²
                  </td>

                  <td>

                    <span className="validation-score">
                      {formatPercentage(event.iou)}
                    </span>

                  </td>

                  <td>
                    {formatPercentage(event.precision)}
                  </td>

                  <td>
                    {formatPercentage(event.recall)}
                  </td>

                  <td>
                    {event.depthMae.toFixed(2)} m
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* SELECTED EVENT */}
      <section className="validation-detail-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              EVENT ANALYSIS
            </span>

            <h2>
              {selectedEvent.event}
            </h2>
          </div>

          <span className="zone-count">
            Reference Event
          </span>

        </div>

        <div className="validation-detail-grid">

          <div className="validation-detail-card">

            <span>
              Observed Flood Extent
            </span>

            <strong>
              {selectedEvent.observedExtent} km²
            </strong>

            <div className="validation-bar">

              <span
                style={{
                  width: "86%"
                }}
              ></span>

            </div>

            <small>
              Historical reference extent
            </small>

          </div>

          <div className="validation-detail-card">

            <span>
              Predicted Flood Extent
            </span>

            <strong>
              {selectedEvent.predictedExtent} km²
            </strong>

            <div className="validation-bar">

              <span
                style={{
                  width: "88%"
                }}
              ></span>

            </div>

            <small>
              Prototype model output
            </small>

          </div>

          <div className="validation-detail-card">

            <span>
              Intersection over Union
            </span>

            <strong>
              {formatPercentage(selectedEvent.iou)}
            </strong>

            <div className="validation-bar">

              <span
                style={{
                  width: `${selectedEvent.iou * 100}%`
                }}
              ></span>

            </div>

            <small>
              Spatial overlap indicator
            </small>

          </div>

          <div className="validation-detail-card">

            <span>
              Precision
            </span>

            <strong>
              {formatPercentage(selectedEvent.precision)}
            </strong>

            <div className="validation-bar">

              <span
                style={{
                  width: `${selectedEvent.precision * 100}%`
                }}
              ></span>

            </div>

            <small>
              Predicted extent agreement
            </small>

          </div>

          <div className="validation-detail-card">

            <span>
              Recall
            </span>

            <strong>
              {formatPercentage(selectedEvent.recall)}
            </strong>

            <div className="validation-bar">

              <span
                style={{
                  width: `${selectedEvent.recall * 100}%`
                }}
              ></span>

            </div>

            <small>
              Observed extent captured
            </small>

          </div>

          <div className="validation-detail-card">

            <span>
              Depth MAE
            </span>

            <strong>
              {selectedEvent.depthMae.toFixed(2)} m
            </strong>

            <div className="validation-bar">

              <span
                style={{
                  width: `${Math.min(
                    selectedEvent.depthMae * 400,
                    100
                  )}%`
                }}
              ></span>

            </div>

            <small>
              Mean absolute depth error
            </small>

          </div>

        </div>

      </section>

      {/* VALIDATION VISUAL */}
      <section className="validation-visual-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              SPATIAL COMPARISON
            </span>

            <h2>
              Observed vs Predicted Flood Extent
            </h2>
          </div>

          <span className="pipeline-demo">
            DEMO GIS
          </span>

        </div>

        <div className="validation-visual">

          <div className="validation-grid-background"></div>

          <div className="validation-river"></div>

          <div className="observed-flood-area">

            <span>
              OBSERVED
            </span>

          </div>

          <div className="predicted-flood-area">

            <span>
              PREDICTED
            </span>

          </div>

          <div className="validation-overlap">

            <span>
              OVERLAP
            </span>

          </div>

          <div className="validation-map-label">
            {selectedEvent.event}
          </div>

          <div className="validation-map-legend">

            <span>
              <i className="validation-observed"></i>
              Observed
            </span>

            <span>
              <i className="validation-predicted"></i>
              Predicted
            </span>

            <span>
              <i className="validation-overlap-color"></i>
              Overlap
            </span>

          </div>

        </div>

      </section>

      {/* METRIC EXPLANATION */}
      <section className="validation-metrics-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              VALIDATION METRICS
            </span>

            <h2>
              What the Metrics Represent
            </h2>
          </div>

        </div>

        <div className="validation-metric-explanation-grid">

          <div className="validation-explanation-card">

            <div>
              IoU
            </div>

            <h3>
              Intersection over Union
            </h3>

            <p>
              Measures how closely the predicted
              inundation area overlaps with the observed
              flood extent.
            </p>

          </div>

          <div className="validation-explanation-card">

            <div>
              P
            </div>

            <h3>
              Precision
            </h3>

            <p>
              Indicates how much of the predicted flood
              area corresponds to the reference flood area.
            </p>

          </div>

          <div className="validation-explanation-card">

            <div>
              R
            </div>

            <h3>
              Recall
            </h3>

            <p>
              Indicates how much of the observed flood
              area was captured by the prediction.
            </p>

          </div>

          <div className="validation-explanation-card">

            <div>
              MAE
            </div>

            <h3>
              Depth Mean Absolute Error
            </h3>

            <p>
              Represents the average difference between
              observed and predicted water depth.
            </p>

          </div>

        </div>

      </section>

      {/* VALIDATION PIPELINE */}
      <section className="validation-pipeline-section">

        <div className="section-card-header">

          <div>
            <span className="section-kicker">
              MODEL VALIDATION WORKFLOW
            </span>

            <h2>
              Historical Data to Model Assessment
            </h2>
          </div>

          <span className="pipeline-demo">
            AI/ML DEMONSTRATION MODE
          </span>

        </div>

        <div className="validation-pipeline">

          <div className="validation-pipeline-step">

            <div>
              01
            </div>

            <strong>
              HISTORICAL DATA
            </strong>

            <span>
              Flood extent and depth records
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="validation-pipeline-step">

            <div>
              02
            </div>

            <strong>
              MODEL INPUT
            </strong>

            <span>
              Rainfall, terrain and drainage
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="validation-pipeline-step">

            <div>
              03
            </div>

            <strong>
              PREDICTION
            </strong>

            <span>
              Flood extent and water depth
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="validation-pipeline-step">

            <div>
              04
            </div>

            <strong>
              COMPARISON
            </strong>

            <span>
              Predicted vs observed
            </span>

          </div>

          <div className="pipeline-arrow">
            →
          </div>

          <div className="validation-pipeline-step">

            <div>
              05
            </div>

            <strong>
              METRICS
            </strong>

            <span>
              IoU, precision, recall and MAE
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
            VALIDATION TRANSPARENCY
          </strong>

          <p>
            The historical events and metric values
            displayed in this prototype are simulated
            demonstration data. They are intended to show
            the validation architecture and should not be
            interpreted as measured operational model
            performance.
          </p>

        </div>

      </section>

    </div>
  );
}

export default HistoricalValidation;