const translate = require("@vitalets/google-translate-api");

module.exports = {
    async TranslateGET(req, res) {
        try {
            let { from, to, text } = req.query;
            let trans = await translate(text, { from, to, });
            res.status(200).json({
                ok: true,
                translate: trans.text
            })
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    }
}