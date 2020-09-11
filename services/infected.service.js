const axios = require("axios");
const baseUrl = "https://www.datos.gov.co/resource/gt2j-8ykr.json";

class InfectedService {
  constructor({ InfectedBusiness }) {
    this._infectedBusiness = InfectedBusiness;
  }

  async getInfectedOfApi() {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.log(error.response.status + " " + error.response.statusText);
    }
  }

  async getFiltersInfected(query) {
    const infected = await this._infectedBusiness.getFiltersInfected(query);
    return infected;
  }

  async getFilterSexAgeInfected(sex) {
      const infected = await this.getInfectedOfApi();
      const infectedFilter = await this._infectedBusiness.getFilterSexAgeInfected(
        sex,
        infected
      );

    return infectedFilter;
  }

  async getOrCreateInfected() {
    const infected = await this.getInfectedOfApi();
    const createInfected = await this._infectedBusiness.getOrCreateInfected(
      infected
    );
  }
}

module.exports = InfectedService;
