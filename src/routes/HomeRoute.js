const { HomeGET } = require("../controllers/HomeController");
const router = require("express").Router();

router.get("/", HomeGET);

module.exports = {
    router,
    path: "/"
}