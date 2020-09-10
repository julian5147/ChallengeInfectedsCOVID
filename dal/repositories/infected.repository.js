const { listModules } = require("awilix");
const { Op } = require("sequelize");

class InfectedRepository {
  constructor({ db }) {
    this._db = db;
  }

  getFiltersInfected(query) {
    return this._db.infected.findAll({
      attributes: ["id"],
      where: query,
    });
  }

  getOrCreateInfected(infected) {
    return this._db.infected.findOrCreate({ where: infected });
  }
}

module.exports = InfectedRepository;
