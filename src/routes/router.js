const tradeRoutes = require("./trade");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome");
  });

  tradeRoutes(app, fs);
};

module.exports = appRouter;