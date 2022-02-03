const express = require("express");
const Cors = require("cors");
const fs = require("fs");
const path = require("path");
const { PORT } = require("../config");

const app = express();

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Cors());

// Routes 
fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    if(!err) {
        files.forEach(file => {
            let routePath = path.join(__dirname, "routes", file);
            let Route = require(routePath);
            if(Route.router && Route.path) {
                app.use(Route.path, Route.router);
            }
        })
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));