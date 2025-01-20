const express = require("express");
const geoip = require("geoip-lite");
const path = require("path");

const app = express();

// Serve a static image and track IP
app.get("/track", (req, res) => {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const geo = geoip.lookup(ip);

    console.log("Visitor Details:");
    console.log("IP Address:", ip);
    console.log("Location:", geo);

    res.sendFile(path.join(__dirname, "cutie2.jpg")); // Serve the image
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));