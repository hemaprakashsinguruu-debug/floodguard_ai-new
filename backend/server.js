const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "process.env.DB_PASSWORD",
    database: "floodguard_ai",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function testDatabase() {
    try {
        const connection = await pool.getConnection();
        console.log("MySQL connected successfully!");
        connection.release();
    } catch (error) {
        console.error("MySQL connection failed:", error.message);
    }
}

app.get("/", (req, res) => {
    res.json({
        message: "FloodGuard AI backend is running",
        database: "floodguard_ai"
    });
});

app.get("/api/overview", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM system_overview ORDER BY id DESC LIMIT 1"
        );
        res.json(rows[0] || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/rainfall-sources", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM rainfall_sources ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/rainfall-forecast", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM rainfall_forecast ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/radar-cells", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM radar_cells ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/flood-zones", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM flood_zones ORDER BY risk_score DESC"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/inundation-forecast", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM inundation_forecast ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/alerts", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM alerts ORDER BY id DESC"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/routes", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM routes ORDER BY risk_score ASC"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/emergency-resources", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM emergency_resources ORDER BY id DESC LIMIT 1"
        );
        res.json(rows[0] || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/hospitals", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM hospitals ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/shelters", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM shelters ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/data-sources", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM data_sources ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/system-status", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM system_status ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/historical-validation", async (req, res) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM historical_validation ORDER BY id"
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/dashboard", async (req, res) => {
    try {
        const [
            [overview],
            [rainfallSources],
            [rainfallForecast],
            [radarCells],
            [floodZones],
            [inundationForecast],
            [alerts],
            [routes],
            [emergencyResources],
            [hospitals],
            [shelters],
            [dataSources],
            [systemStatus],
            [historicalValidation]
        ] = await Promise.all([
            pool.query("SELECT * FROM system_overview ORDER BY id DESC LIMIT 1"),
            pool.query("SELECT * FROM rainfall_sources ORDER BY id"),
            pool.query("SELECT * FROM rainfall_forecast ORDER BY id"),
            pool.query("SELECT * FROM radar_cells ORDER BY id"),
            pool.query("SELECT * FROM flood_zones ORDER BY risk_score DESC"),
            pool.query("SELECT * FROM inundation_forecast ORDER BY id"),
            pool.query("SELECT * FROM alerts ORDER BY id DESC"),
            pool.query("SELECT * FROM routes ORDER BY risk_score ASC"),
            pool.query("SELECT * FROM emergency_resources ORDER BY id DESC LIMIT 1"),
            pool.query("SELECT * FROM hospitals ORDER BY id"),
            pool.query("SELECT * FROM shelters ORDER BY id"),
            pool.query("SELECT * FROM data_sources ORDER BY id"),
            pool.query("SELECT * FROM system_status ORDER BY id"),
            pool.query("SELECT * FROM historical_validation ORDER BY id")
        ]);

        res.json({
            overview: overview[0] || {},
            rainfallSources,
            rainfallForecast,
            radarCells,
            floodZones,
            inundationForecast,
            alerts,
            routes,
            emergencyResources: emergencyResources[0] || {},
            hospitals,
            shelters,
            dataSources,
            systemStatus,
            historicalValidation
        });
    } catch (error) {
        console.error("Dashboard error:", error.message);
        res.status(500).json({
            error: "Failed to load FloodGuard dashboard data",
            details: error.message
        });
    }
});

app.get("/api/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({
            status: "OK",
            database: "CONNECTED",
            databaseName: "floodguard_ai"
        });
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            database: "DISCONNECTED",
            message: error.message
        });
    }
});

app.use((req, res) => {
    res.status(404).json({
        error: "API endpoint not found"
    });
});

app.listen(PORT, async () => {
    console.log(`FloodGuard AI backend running on http://localhost:${PORT}`);
    await testDatabase();
});
