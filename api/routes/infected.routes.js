const { Router } = require("express");

module.exports = function ({ InfectedController }) {
  const router = Router();

  router.get("/filters", InfectedController.getFiltersInfected.bind(InfectedController));
  router.get("/filterSexAge/:sex", InfectedController.getFilterSexAgeInfected.bind(InfectedController));

  return router;
};
