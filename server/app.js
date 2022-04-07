const express = require("express");
const {  Brawler } = require("./model");

const app = express();
app.use(express.json());

app.get("/brawlers", async (req, res, next) => {
  const brawlers = await Brawler.findAll({});
  return res.json(brawlers);
});

app.post("/brawlers", async (req, res, next) => {
  try {
    const createBrawlerReq = {
      name: req.body.name,
      health: req.body.health,
      power: req.body.power,
      type: req.body.type
    };
    const brawler = await Brawler.create({ ...createBrawlerReq });
    if (brawler) {
      return res
        .status(201)
        .send({ message: "Brawler added successfully!", data: brawler });
    }
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err });
  }
});


module.exports = app;
