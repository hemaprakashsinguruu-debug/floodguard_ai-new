export const systemOverview = {
  currentRainfall: 86,
  rainfallUnit: "mm/hr",
  forecast3h: 142,
  heavyRainProbability: 91,
  inundationLevel: "HIGH",
  maxWaterDepth: 0.84,
  affectedArea: 18.6,
  warningLeadTime: "2h 35m",
  activeAlerts: 24,
  lastUpdate: "2 minutes ago"
};

export const rainfallSources = [
  {
    id: "satellite",
    name: "Satellite",
    icon: "🛰️",
    status: "DEMO",
    value: "82 mm/hr",
    description: "Satellite-derived precipitation estimate",
    update: "5 min ago"
  },
  {
    id: "radar",
    name: "Weather Radar",
    icon: "📡",
    status: "DEMO",
    value: "91 dBZ",
    description: "Simulated radar reflectivity observation",
    update: "2 min ago"
  },
  {
    id: "observation",
    name: "Observational Weather",
    icon: "🌧️",
    status: "DEMO",
    value: "86 mm/hr",
    description: "Ground weather station observations",
    update: "3 min ago"
  },
  {
    id: "nwp",
    name: "NWP Model",
    icon: "🌐",
    status: "DEMO",
    value: "142 mm",
    description: "Numerical weather prediction forecast",
    update: "15 min ago"
  }
];

export const rainfallForecast = [
  {
    time: "Now",
    observed: 86,
    radar: 91,
    satellite: 82,
    nwp: 84,
    aiForecast: 88
  },
  {
    time: "+1h",
    observed: 94,
    radar: 97,
    satellite: 92,
    nwp: 101,
    aiForecast: 106
  },
  {
    time: "+2h",
    observed: 108,
    radar: 112,
    satellite: 105,
    nwp: 119,
    aiForecast: 126
  },
  {
    time: "+3h",
    observed: 118,
    radar: 125,
    satellite: 116,
    nwp: 133,
    aiForecast: 142
  },
  {
    time: "+6h",
    observed: 76,
    radar: 81,
    satellite: 79,
    nwp: 92,
    aiForecast: 98
  }
];

export const radarCells = [
  {
    id: "cell-01",
    name: "Storm Cell Alpha",
    intensity: "Severe",
    reflectivity: 91,
    rainfall: 118,
    movement: "NE",
    speed: "28 km/h",
    probability: 94
  },
  {
    id: "cell-02",
    name: "Storm Cell Beta",
    intensity: "High",
    reflectivity: 76,
    rainfall: 82,
    movement: "E",
    speed: "22 km/h",
    probability: 81
  },
  {
    id: "cell-03",
    name: "Storm Cell Gamma",
    intensity: "Moderate",
    reflectivity: 58,
    rainfall: 54,
    movement: "NE",
    speed: "18 km/h",
    probability: 67
  }
];

export const zones = [
  {
    id: "Z-01",
    name: "Central Urban Zone",
    status: "Critical",
    risk: 94,
    rainfall: 128,
    waterDepth: 0.84,
    inundationProbability: 96,
    affectedArea: 6.8,
    population: 18200,
    roadsBlocked: 7,
    latitude: 17.71,
    longitude: 83.30
  },
  {
    id: "Z-02",
    name: "Eastern Lowland",
    status: "Severe",
    risk: 86,
    rainfall: 112,
    waterDepth: 0.62,
    inundationProbability: 88,
    affectedArea: 4.7,
    population: 12600,
    roadsBlocked: 4,
    latitude: 17.73,
    longitude: 83.34
  },
  {
    id: "Z-03",
    name: "Northern Catchment",
    status: "High",
    risk: 73,
    rainfall: 94,
    waterDepth: 0.41,
    inundationProbability: 74,
    affectedArea: 3.2,
    population: 8900,
    roadsBlocked: 2,
    latitude: 17.75,
    longitude: 83.28
  },
  {
    id: "Z-04",
    name: "Western Residential",
    status: "Moderate",
    risk: 48,
    rainfall: 68,
    waterDepth: 0.19,
    inundationProbability: 43,
    affectedArea: 2.1,
    population: 5400,
    roadsBlocked: 1,
    latitude: 17.70,
    longitude: 83.25
  },
  {
    id: "Z-05",
    name: "Southern Industrial",
    status: "Low",
    risk: 26,
    rainfall: 42,
    waterDepth: 0.07,
    inundationProbability: 19,
    affectedArea: 1.8,
    population: 3100,
    roadsBlocked: 0,
    latitude: 17.68,
    longitude: 83.31
  }
];

export const inundationForecast = [
  {
    horizon: "T+0",
    affectedArea: 12.4,
    maxDepth: 0.52,
    probability: 68
  },
  {
    horizon: "T+1",
    affectedArea: 15.8,
    maxDepth: 0.68,
    probability: 79
  },
  {
    horizon: "T+2",
    affectedArea: 18.6,
    maxDepth: 0.84,
    probability: 91
  },
  {
    horizon: "T+3",
    affectedArea: 22.1,
    maxDepth: 1.12,
    probability: 94
  }
];

export const alerts = [
  {
    id: "ALT-001",
    severity: "Critical",
    title: "Extreme Rainfall & Inundation Risk",
    zone: "Central Urban Zone",
    message:
      "Heavy rainfall may cause rapid water accumulation in low-lying areas.",
    rainfall: "128 mm/hr",
    waterDepth: "0.84 m",
    leadTime: "2h 35m",
    time: "18:42"
  },
  {
    id: "ALT-002",
    severity: "Warning",
    title: "Flood Risk Increasing",
    zone: "Eastern Lowland",
    message:
      "Forecast rainfall indicates increasing inundation probability.",
    rainfall: "112 mm/hr",
    waterDepth: "0.62 m",
    leadTime: "3h 10m",
    time: "18:35"
  },
  {
    id: "ALT-003",
    severity: "Watch",
    title: "Heavy Rainfall Watch",
    zone: "Northern Catchment",
    message:
      "Sustained rainfall may increase downstream flood risk.",
    rainfall: "94 mm/hr",
    waterDepth: "0.41 m",
    leadTime: "4h 05m",
    time: "18:28"
  }
];

export const routes = [
  {
    id: "R-01",
    name: "Route A",
    distance: "7.8 km",
    duration: "18 min",
    risk: "Low",
    riskScore: 21,
    blockedRoads: 0,
    sheltersNearby: 2
  },
  {
    id: "R-02",
    name: "Route B",
    distance: "6.4 km",
    duration: "16 min",
    risk: "Moderate",
    riskScore: 43,
    blockedRoads: 1,
    sheltersNearby: 1
  },
  {
    id: "R-03",
    name: "Route C",
    distance: "5.9 km",
    duration: "14 min",
    risk: "High",
    riskScore: 72,
    blockedRoads: 3,
    sheltersNearby: 0
  }
];

export const emergencyResources = {
  affectedPopulation: 48200,
  hospitals: 8,
  shelters: 14,
  blockedRoads: 14,
  criticalBridges: 3,
  rescueRequests: 37,
  activeResponseTeams: 12
};

export const hospitals = [
  {
    name: "City General Hospital",
    type: "Hospital",
    status: "Operational",
    capacity: "72%"
  },
  {
    name: "Emergency Medical Center",
    type: "Hospital",
    status: "Operational",
    capacity: "61%"
  },
  {
    name: "North Community Hospital",
    type: "Hospital",
    status: "Warning",
    capacity: "89%"
  }
];

export const shelters = [
  {
    name: "Central Relief Shelter",
    capacity: 1200,
    occupied: 740,
    status: "Open"
  },
  {
    name: "East Community Shelter",
    capacity: 850,
    occupied: 420,
    status: "Open"
  },
  {
    name: "North Relief Center",
    capacity: 600,
    occupied: 510,
    status: "Nearly Full"
  }
];

export const dataSources = [
  {
    name: "Satellite",
    dataType: "Precipitation / Cloud Data",
    update: "5 min",
    role: "Rainfall estimation",
    status: "DEMO"
  },
  {
    name: "Weather Radar",
    dataType: "Reflectivity",
    update: "2 min",
    role: "Storm detection",
    status: "DEMO"
  },
  {
    name: "Weather Stations",
    dataType: "Rainfall / Temperature / Humidity",
    update: "3 min",
    role: "Ground observation",
    status: "DEMO"
  },
  {
    name: "NWP",
    dataType: "Forecast Variables",
    update: "15 min",
    role: "Future rainfall prediction",
    status: "DEMO"
  },
  {
    name: "DEM / Terrain",
    dataType: "Elevation",
    update: "Static",
    role: "Flood modelling",
    status: "READY"
  },
  {
    name: "Drainage Network",
    dataType: "Drainage Paths",
    update: "Static",
    role: "Water flow modelling",
    status: "READY"
  },
  {
    name: "Historical Flood Data",
    dataType: "Flood Extent / Depth",
    update: "Historical",
    role: "Model validation",
    status: "DEMO"
  },
  {
    name: "Water Level",
    dataType: "River / Drain Levels",
    update: "5 min",
    role: "Inundation prediction",
    status: "DEMO"
  },
  {
    name: "Road Network",
    dataType: "Road / Bridge Data",
    update: "Dynamic",
    role: "Safe route calculation",
    status: "READY"
  }
];

export const systemStatus = [
  {
    name: "Satellite Data",
    status: "DEMO",
    message: "Simulated feed available"
  },
  {
    name: "Weather Radar",
    status: "DEMO",
    message: "Simulated radar available"
  },
  {
    name: "Weather Stations",
    status: "ONLINE",
    message: "Demo observations available"
  },
  {
    name: "NWP Model",
    status: "DEMO",
    message: "Simulated forecast available"
  },
  {
    name: "AI Rainfall Model",
    status: "DEMO",
    message: "AI/ML demonstration mode"
  },
  {
    name: "Inundation Model",
    status: "DEMO",
    message: "Deterministic simulation engine"
  },
  {
    name: "GIS Engine",
    status: "ONLINE",
    message: "Map visualization ready"
  },
  {
    name: "Alert Engine",
    status: "ONLINE",
    message: "Demo alert pipeline ready"
  },
  {
    name: "Routing Engine",
    status: "ONLINE",
    message: "Risk-aware route simulation"
  },
  {
    name: "Database",
    status: "ONLINE",
    message: "Backend connection ready"
  }
];

export const validationData = [
  {
    event: "Demo Flood Event A",
    observedExtent: 18.2,
    predictedExtent: 18.6,
    iou: 0.81,
    precision: 0.86,
    recall: 0.88,
    depthMae: 0.14
  },
  {
    event: "Demo Flood Event B",
    observedExtent: 14.7,
    predictedExtent: 15.1,
    iou: 0.77,
    precision: 0.82,
    recall: 0.84,
    depthMae: 0.18
  },
  {
    event: "Demo Flood Event C",
    observedExtent: 21.4,
    predictedExtent: 20.8,
    iou: 0.84,
    precision: 0.89,
    recall: 0.87,
    depthMae: 0.12
  }
];

export const riskLegend = [
  {
    label: "Low",
    color: "#22c55e",
    range: "0–30"
  },
  {
    label: "Moderate",
    color: "#eab308",
    range: "31–50"
  },
  {
    label: "High",
    color: "#f97316",
    range: "51–75"
  },
  {
    label: "Severe / Critical",
    color: "#ef4444",
    range: "76–100"
  }
];

export const pipelineSteps = [
  {
    number: "01",
    title: "DATA",
    description: "Satellite, radar, weather and NWP"
  },
  {
    number: "02",
    title: "FORECAST",
    description: "AI/ML rainfall prediction"
  },
  {
    number: "03",
    title: "INUNDATION",
    description: "Flood extent and depth"
  },
  {
    number: "04",
    title: "ALERT",
    description: "Risk-based early warning"
  },
  {
    number: "05",
    title: "RESPONSE",
    description: "Routes and emergency action"
  }
];

export const demoTransparency =
  "This prototype uses simulated/demo data where live operational feeds are unavailable. The architecture is designed for integration with authorized satellite, radar, observational weather and NWP data sources.";

export const aiModeLabel = "AI/ML DEMONSTRATION MODE";