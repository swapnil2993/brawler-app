const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

class Brawler extends Sequelize.Model {}
Brawler.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    health: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    power: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.DataTypes.ENUM("rare", "common", "very-rare"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Brawlers",
  }
);

module.exports = {
  sequelize,
  Brawler,
};
