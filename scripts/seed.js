const { Brawler } = require("../server/model");

seed();

async function seed() {
  await Brawler.sync({ force: true });

  await Promise.all([
    Brawler.create({
      name: "Anton",
      health: 500,
      power: 6000,
      type: "rare",
    }),
    Brawler.create({
      name: "Barley",
      health: 100,
      power: 6400,
      type: "common",
    }),
    Brawler.create({
      name: "Rudi",
      health: 1500,
      power: 10040,
      type: "very-rare",
    }),
  ]);
}
