const tradeRouter = (app, fs) => {
    const licenseDataPath = "./src/ui-config/specification/trading-license/apply.json"
    const financeDataPath = "./src/ui-config/specification/finance/collect.json"

    app.get("/get_meta_data/tradelicense/apply", (req, res) => {
        fs.readFile(licenseDataPath, "utf8", (err, data) => {
            if (err) {
                throw err
            }
            const dataJson = JSON.parse(data)
            const module_name = req.body.module_name
            const screen_name = req.body.screen_name
            if (module_name === "tradelicense" && screen_name === "apply") {
                res.send(dataJson);
            }
        })
    })

    app.get("/get_meta_data/finance/collect", (req, res) => {
        fs.readFile(financeDataPath, "utf8", (err, data) => {
            if (err) {
                throw err
            }
            const dataJson = JSON.parse(data)
            const module_name = req.body.module_name
            const screen_name = req.body.screen_name
            if (module_name === "tradelicense" && screen_name === "apply") {
                res.send(dataJson);
            }
        })
    })
}

module.exports = tradeRouter