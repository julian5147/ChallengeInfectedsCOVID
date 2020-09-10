const { attributes } = require("structure");

const Infected = attributes({
  id_de_caso: {
    type: String,
  },
  sexo: {
    type: String,
  },
  estado: {
    type: String,
  },
  ciudad_de_ubicaci_n: {
    type: String,
  },
})(class Infected {});

module.exports = Infected;