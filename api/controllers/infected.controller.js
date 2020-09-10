class InfectedController {
  constructor({ InfectedService }) {
    this._infectedService = InfectedService;
  }
  async getFiltersInfected(req, res) {
    let infected = await this._infectedService.getFiltersInfected(req.query);
    return res.send({
      payload: infected,
    });
  }

  async getFilterSexAgeInfected(req, res) {
    const sex  = req.query.sexo;
    let infected = await this._infectedService.getFilterSexAgeInfected(sex);
    //infected = mapper(InfectedDto, infected);
    return res.send({
      payload: infected,
    });
  }

  async createInfected(req, res) {
    const { body } = req;
    const createInfected = await this._infectedService.createInfected(body);
    const infected = mapper(InfectedDto, createInfected);
    return res.status(201).send({
      payload: infected,
    });
  }

  async updateInfected(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._infectedService.updateInfected(id, body);
    return res.status(204).send();
  }

  async deleteInfected(req, res) {
    const { id } = req.params;
    await this._infectedService.deleteInfected(id);
    return res.status(204).send();
  }
}

module.exports = InfectedController;
