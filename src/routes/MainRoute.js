const { TranslateGET } = require("../controllers/MainController");

const router = require("express").Router();

router.get("/", TranslateGET);

module.exports = {
    router,
    path: "/api"
}