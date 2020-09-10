const  Infected  = require("../models/infected");

module.exports = {
  toDomainEntity(infected) {
    const { id } = infected;
    return new Infected({
      id_de_caso: id,
    });
  },
};
