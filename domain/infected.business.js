const { toDomainEntity } = require("../domain/mappers");
const { toDbEntity } = require("../dal/mappers");

class InfectedBusiness {
  constructor({ InfectedRepository }) {
    this._infectedRepository = InfectedRepository;
  }

  async getFiltersInfected(query) {
    const infected = await this._infectedRepository.getFiltersInfected(query);
    return infected.map(toDomainEntity);
  }

  async getFilterSexAgeInfected(sex, infected) {
    const Age_0_20 = [];
    const Age_20_40 = [];
    const Age_40_mas = [];
    infected.forEach((infect) => {
      if (infect.sexo === sex) {
        if (this.inRange(infect.edad, 0, 20)) {
          Age_0_20.push(infect);
        } else if (this.inRange(infect.edad, 20, 40)) {
          Age_20_40.push(infect);
        } else if (infect.edad >= 40) {
          Age_40_mas.push(infect);
        }
      }
    });

    return {
      sexo: sex,
      edad_0_20: Age_0_20,
      edad_20_40: Age_20_40,
      edad_40_mas: Age_40_mas,
    };
  }

  inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }

  async getOrCreateInfected(infected) {
    const infecteds = infected.map(async (infect) => {
      infect = toDbEntity(infect);
      const [
        createInfected,
        created,
      ] = await this._infectedRepository.getOrCreateInfected(infect);
      if (created) {
        return createInfected.toJSON();
      }
    });

    return infecteds;
  }
}

module.exports = InfectedBusiness;
