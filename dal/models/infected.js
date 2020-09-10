module.exports = function (sequelize, DataTypes) {
  const Infected = sequelize.define(
    "infected",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      sex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "infected",
      timestamps: false,
    }
  );

  return Infected;
};
