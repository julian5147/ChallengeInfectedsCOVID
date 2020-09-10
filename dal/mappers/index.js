module.exports = {
  toDbEntity(infected) {
    const { id_de_caso, sexo, estado, ciudad_de_ubicaci_n } = infected;
    return {
      id: id_de_caso,
      sex: sexo,
      state: estado,
      city: ciudad_de_ubicaci_n,
    };
  },
};
