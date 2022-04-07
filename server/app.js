const express = require("express");
const { Brawler } = require("./model");

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
      type: req.body.type,
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

app.delete("/brawlers/:id", async (req, res, next) => {
  try {
    const result = await Brawler.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (result === 1) {
      res.status(200).json({ message: "Deleted successfully" });
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err });
  }
});

app.put("/brawlers/:id", async (req, res, next) => {
  try {
    const brawler = await Brawler.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (brawler) {
      const updateBrawlerReq = {
        name: req.body.name,
        health: req.body.health,
        power: req.body.power,
        type: req.body.type,
      };
      const response = await brawler.update(updateBrawlerReq);
      if (response) {
        res.status(200).json({ message: "Record updated successfully" });
      }
    }
    res.status(404).json({ message: "Record not found" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err });
  }
});

app.get("/brawlers/:id", async (req, res, next) => {
  try {
    const brawler = await Brawler.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (brawler) {
      res
        .status(200)
        .json({ message: "Record updated successfully", data: brawler });
    }
    res.status(404).json({ message: "Record not found" });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err });
  }
});

module.exports = app;
