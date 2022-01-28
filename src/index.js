const express = require("express");
const Cors = require("cors");
const MainRouter = require("./routes/MainRoute");
const { PORT } = require("../config");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Cors());

// Routes 
app.use(MainRouter.path, MainRouter.router);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));