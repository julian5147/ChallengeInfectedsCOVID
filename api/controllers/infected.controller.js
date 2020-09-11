class InfectedController {
  constructor({ InfectedService }) {
    this._infectedService = InfectedService;
  }
  async getFiltersInfected(req, res) {
    try {
      const infected = await this._infectedService.getFiltersInfected(
        req.query
      );
      return res.status(200).send({
        payload: infected,
      });
    } catch (error) {
      return res.status(404).send({
        error: error.message,
      });
    }
  }

  async getFilterSexAgeInfected(req, res) {
    try {
      const sex = req.params.sex;
      const infected = await this._infectedService.getFilterSexAgeInfected(sex);
      return res.status(200).send({
        payload: infected,
      });
    } catch (error) {
      return res.status(404).send({
        error: error.message,
      });
    }
  }
}

module.exports = InfectedController;
