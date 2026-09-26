import { useState } from "react";
import DataSourceCard from "../components/DataSourceCard";
import {
  rainfallSources,
  rainfallForecast,
  demoTransparency
} from "../data/demoData";

function RainfallIntelligence() {
  const [selectedSource, setSelectedSource] = useState(
    rainfallSources[0]
  );

  const [forecastHorizon, setForecastHorizon] =
    useState("all");

  const getSourceDetails = (source) => {
    const details = {
      satellite: {
        title: "Satellite Precipitation Intelligence",
        description:
          "Simulated satellite-derived precipitation information used as one input to the multi-source rainfall fusion pipeline.",
        parameters:
          "Precipitation estimate, cloud structure, spatial coverage",
        role: "Large-area rainfall estimation"
      },
      radar: {
        title: "Weather Radar Intelligence",
        description:
          "Simulated radar reflectivity information used to identify storm cells, rainfall intensity and movement.",
        parameters:
          "Reflectivity, storm intensity, cell movement, coverage",
        role: "Short-range storm monitoring"
      },
      observation: {
        title: "Observational Weather",
        description:
          "Simulated ground observations representing rainfall and atmospheric conditions from weather stations.",
        parameters:
          "Rainfall, temperature, humidity, wind and pressure",
        role: "Ground-truth observations"
      },
      nwp: {
        title: "Numerical Weather Prediction",
        description:
          "Simulated numerical weather prediction output used to provide future atmospheric and rainfall conditions.",
        parameters:
          "Forecast rainfall, temperature, humidity, wind and pressure",
        role: "Future weather guidance"
      }
    };

    return details[source.id] || details.observation;
  };

  const details = getSourceDetails(selectedSource);

  const filteredForecast =
    forecastHorizon === "all"
      ? rainfallForecast
      : rainfallForecast.filter(
          (item) => item.time === forecastHorizon
        );

  const maxValue = Math.max(
    ...rainfallForecast.flatMap((item) => [
      item.observed,
      item.radar,
      item.satellite,
      item.nwp,
      item.aiForecast
    ])
  );

  return (
    <div className="rainfall-intelligence-page">
      <div className="page-heading">
        <div>
          <div className="page-kicker">
            MULTI-SOURCE WEATHER INTELLIGENCE
          </div>

          <h1>Rainfall Intelligence</h1>

          <p>
            Combining satellite, radar, observational
            weather and NWP information for heavy
            rainfall forecasting.
          </p>
        </div>

        <div className="page-demo-status">
          <span className="demo-dot"></span>
          AI/ML DEMONSTRATION MODE
        </div>
      </div>

      <section className="rainfall-source-section">
        <div className="section-card-header">
          <div>
            <span className="section-kicker">
              INPUT DATA SOURCES
            </span>

            <h2>Multi-Source Rainfall Intelligence</h2>
          </div>

          <span className="source-count">
            {rainfallSources.length} sources
          </span>
        </div>

        <div className="rainfall-source-grid">
          {rainfallSources.map((source) => (
            <DataSourceCard
              key={source.id}
              name={source.name}
              icon={source.icon}
              status={source.status}
              value={source.value}
              description={source.description}
              update={source.update}
              onClick={() => setSelectedSource(source)}
            />
          ))}
        </div>
      </section>

      <section className="source-detail-section">
        <div className="source-detail-card">
          <div className="source-detail-left">
            <div className="source-detail-icon">
              {selectedSource.icon}
            </div>

            <div>
              <span className="section-kicker">
                SELECTED DATA SOURCE
              </span>

              <h2>{details.title}</h2>

              <p>{details.description}</p>
            </div>
          </div>

          <div className="source-detail-status">
            <span className="demo-dot"></span>
            {selectedSource.status}
          </div>

          <div className="source-detail-information">
            <div>
              <span>Current Value</span>
              <strong>{selectedSource.value}</strong>
            </div>

            <div>
              <span>Update</span>
              <strong>{selectedSource.update}</strong>
            </div>

            <div>
              <span>Role</span>
              <strong>{details.role}</strong>
            </div>

            <div>
              <span>Parameters</span>
              <strong>{details.parameters}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="data-fusion-section">
        <div className="section-card-header">
          <div>
            <span className="section-kicker">
              DATA FUSION PIPELINE
            </span>

            <h2>
              Multi-Source Data Fusion
            </h2>

            <p>
              Multiple weather data streams are combined
              before the rainfall forecasting stage.
            </p>
          </div>
        </div>

        <div className="fusion-flow">
          <div className="fusion-source">
            <div className="fusion-icon">
              🛰️
            </div>

            <strong>Satellite</strong>

            <span>
              Precipitation estimates
            </span>
          </div>

          <div className="fusion-connector">
            →
          </div>

          <div className="fusion-source">
            <div className="fusion-icon">
              📡
            </div>

            <strong>Radar</strong>

            <span>
              Storm reflectivity
            </span>
          </div>

          <div className="fusion-connector">
            →
          </div>

          <div className="fusion-source">
            <div className="fusion-icon">
              🌧️
            </div>

            <strong>Observations</strong>

            <span>
              Ground measurements
            </span>
          </div>

          <div className="fusion-connector">
            →
          </div>

          <div className="fusion-source">
            <div className="fusion-icon">
              🌐
            </div>

            <strong>NWP</strong>

            <span>
              Numerical forecasts
            </span>
          </div>

          <div className="fusion-connector">
            →
          </div>

          <div className="fusion-engine">
            <div className="fusion-engine-icon">
              AI
            </div>

            <strong>DATA FUSION</strong>

            <span>
              Feature alignment &amp;
              forecasting inputs
            </span>
          </div>

          <div className="fusion-connector">
            →
          </div>

          <div className="fusion-output">
            <div className="fusion-output-icon">
              ✓
            </div>

            <strong>AI RAINFALL FORECAST</strong>

            <span>
              Heavy rainfall prediction
            </span>
          </div>
        </div>
      </section>

      <section className="forecast-section">
        <div className="section-card-header">
          <div>
            <span className="section-kicker">
              FORECAST ANALYTICS
            </span>

            <h2>
              Observed vs Forecast Rainfall
            </h2>

            <p>
              Comparison of simulated observations,
              radar, satellite, NWP and AI forecast
              values.
            </p>
          </div>

          <div className="forecast-controls">
            <button
              type="button"
              className={
                forecastHorizon === "all"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setForecastHorizon("all")
              }
            >
              All
            </button>

            {rainfallForecast.map((item) => (
              <button
                type="button"
                key={item.time}
                className={
                  forecastHorizon === item.time
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setForecastHorizon(item.time)
                }
              >
                {item.time}
              </button>
            ))}
          </div>
        </div>

        <div className="forecast-chart-card">
          <div className="chart-y-axis">
            <span>{maxValue}</span>
            <span>{Math.round(maxValue * 0.75)}</span>
            <span>{Math.round(maxValue * 0.5)}</span>
            <span>{Math.round(maxValue * 0.25)}</span>
            <span>0</span>
          </div>

          <div className="forecast-chart">
            <div className="chart-grid-line line-one"></div>
            <div className="chart-grid-line line-two"></div>
            <div className="chart-grid-line line-three"></div>
            <div className="chart-grid-line line-four"></div>
            <div className="chart-grid-line line-five"></div>

            <div className="chart-bars-area">
              {filteredForecast.map((item) => {
                const values = [
                  {
                    value: item.observed,
                    label: "Observed",
                    className: "observed"
                  },
                  {
                    value: item.radar,
                    label: "Radar",
                    className: "radar"
                  },
                  {
                    value: item.satellite,
                    label: "Satellite",
                    className: "satellite"
                  },
                  {
                    value: item.nwp,
                    label: "NWP",
                    className: "nwp"
                  },
                  {
                    value: item.aiForecast,
                    label: "AI Forecast",
                    className: "ai"
                  }
                ];

                return (
                  <div
                    className="forecast-column"
                    key={item.time}
                  >
                    <div className="forecast-bars">
                      {values.map((data) => (
                        <div
                          className="forecast-bar-wrapper"
                          key={data.label}
                        >
                          <div
                            className={`forecast-bar ${data.className}`}
                            style={{
                              height: `${Math.max(
                                4,
                                (data.value /
                                  maxValue) *
                                  100
                              )}%`
                            }}
                            title={`${data.label}: ${data.value} mm/hr`}
                          >
                            <span>
                              {data.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="forecast-time">
                      {item.time}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="forecast-legend">
          <span>
            <i className="legend-observed"></i>
            Observed
          </span>

          <span>
            <i className="legend-radar"></i>
            Radar
          </span>

          <span>
            <i className="legend-satellite"></i>
            Satellite
          </span>

          <span>
            <i className="legend-nwp"></i>
            NWP
          </span>

          <span>
            <i className="legend-ai"></i>
            AI Forecast
          </span>
        </div>
      </section>

      <section className="rainfall-analysis-grid">
        <div className="analysis-card">
          <div className="analysis-card-header">
            <div>
              <span className="section-kicker">
                AI/ML FORECAST
              </span>

              <h3>
                Heavy Rainfall Assessment
              </h3>
            </div>

            <div className="analysis-score">
              91%
            </div>
          </div>

          <div className="analysis-meter">
            <span
              style={{
                width: "91%"
              }}
            ></span>
          </div>

          <div className="analysis-row">
            <span>
              Current rainfall
            </span>

            <strong>
              86 mm/hr
            </strong>
          </div>

          <div className="analysis-row">
            <span>
              3-hour forecast
            </span>

            <strong>
              142 mm
            </strong>
          </div>

          <div className="analysis-row">
            <span>
              Heavy rainfall probability
            </span>

            <strong>
              91%
            </strong>
          </div>

          <div className="analysis-row">
            <span>
              Warning lead time
            </span>

            <strong>
              2h 35m
            </strong>
          </div>
        </div>

        <div className="analysis-card">
          <div className="analysis-card-header">
            <div>
              <span className="section-kicker">
                MODEL INPUTS
              </span>

              <h3>
                AI/ML Feature Set
              </h3>
            </div>
          </div>

          <div className="feature-grid">
            <span>Rainfall History</span>
            <span>Radar Reflectivity</span>
            <span>Satellite Precipitation</span>
            <span>Temperature</span>
            <span>Humidity</span>
            <span>Wind Speed</span>
            <span>Atmospheric Pressure</span>
            <span>NWP Forecast</span>
            <span>Terrain / DEM</span>
            <span>Drainage</span>
            <span>Historical Floods</span>
            <span>Water Levels</span>
          </div>
        </div>
      </section>

      <section className="transparency-panel">
        <div className="transparency-icon">
          i
        </div>

        <div>
          <strong>
            DATA TRANSPARENCY
          </strong>

          <p>
            {demoTransparency}
          </p>
        </div>
      </section>
    </div>
  );
}

export default RainfallIntelligence;