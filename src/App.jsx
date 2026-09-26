import { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import CommandCenter from "./pages/CommandCenter";
import RainfallIntelligence from "./pages/RainfallIntelligence";
import RadarMonitor from "./pages/RadarMonitor";
import InundationPrediction from "./pages/InundationPrediction";
import RiskMapPage from "./pages/RiskMapPage";
import ScenarioSimulator from "./pages/ScenarioSimulator";
import AlertCenter from "./pages/AlertCenter";
import SafeRoutes from "./pages/SafeRoutes";
import EmergencyResponse from "./pages/EmergencyResponse";
import HistoricalValidation from "./pages/HistoricalValidation";
import DataSources from "./pages/DataSources";
import SystemStatus from "./pages/SystemStatus";

const API = "http://localhost:5000/api";

function App() {
  const [activePage, setActivePage] = useState("command");
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch(`${API}/dashboard`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Backend connection error:", error);
      });
  }, []);

  const renderPage = () => {
    const props = { backendData };

    switch (activePage) {
      case "command":
        return <CommandCenter {...props} />;
      case "rainfall":
        return <RainfallIntelligence {...props} />;
      case "radar":
        return <RadarMonitor {...props} />;
      case "inundation":
        return <InundationPrediction {...props} />;
      case "riskmap":
        return <RiskMapPage {...props} />;
      case "scenario":
        return <ScenarioSimulator {...props} />;
      case "alerts":
        return <AlertCenter {...props} />;
      case "routes":
        return <SafeRoutes {...props} />;
      case "emergency":
        return <EmergencyResponse {...props} />;
      case "historical":
        return <HistoricalValidation {...props} />;
      case "sources":
        return <DataSources {...props} />;
      case "status":
        return <SystemStatus {...props} />;
      default:
        return <CommandCenter {...props} />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-area">
        <Header backendData={backendData} />

        <main className="page-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;