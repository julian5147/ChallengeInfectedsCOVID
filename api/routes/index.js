const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ InfectedRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(cors()).use(bodyParser.json()).use(compression());

  apiRoute.use("/infected", InfectedRoutes);
  router.use("/api", apiRoute);
  return router;
};
