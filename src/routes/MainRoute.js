const router = require("express").Router();
const { TranslateGET, LangGET } = require("../controllers/MainController");

router.get("/", TranslateGET);
router.get("/langs", LangGET);

module.exports = {
    router,
    path: "/api"
}