const express = require("express");
const cors = require("cors");
const { Brawler } = require("./model");
const path = require("path")

const app = express();
app.use(express.json());

app.use(cors());
app.options("*", cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.get("/api/brawlers", async (req, res, next) => {
  const brawlers = await Brawler.findAll({});
  return res.send(brawlers);
});

app.post("/api/brawlers", async (req, res, next) => {
  try {
    const createBrawlerReq = {
      name: req.body.name,
      health: req.body.health,
      power: req.body.power,
      type: req.body.type,
    };
    const brawler = await Brawler.create({ ...createBrawlerReq });
    if (brawler && !res.headersSent) {
      return res
        .sendStatus(201)
        .json({ message: "Brawler added successfully!", data: brawler });
    }
  } catch (err) {
    if (!res.headersSent) {
      return res
        .status(400)
        .json({ message: "Something went wrong", error: err });
    }
  }
});

app.delete("/api/brawlers/:id", async (req, res, next) => {
  try {
    const result = await Brawler.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!res.headersSent) {
      if (result === 1) {
        return res.json({ message: "Deleted successfully" });
      } else {
        return res.sendStatus(404).json({ message: "Record not found" });
      }
    }
  } catch (err) {
    if (!res.headersSent) {
      return res
        .sendStatus(400)
        .json({ message: "Something went wrong", error: err });
    }
  }
});

app.put("/api/brawlers/:id", async (req, res, next) => {
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
        if (!res.headersSent) {
          return res.json({ message: "Record updated successfully" });
        }
      }
    } else {
      if (!res.headersSent) {
        return res.sendStatus(404).json({ message: "Record not found" });
      }
    }
  } catch (err) {
    if (!res.headersSent) {
      return res
        .sendStatus(400)
        .json({ message: "Something went wrong", error: err });
    }
  }
});

app.get("/api/brawlers/:id", async (req, res, next) => {
  try {
    const brawler = await Brawler.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (brawler) {
      return res.json({ message: "Record fetch", data: brawler });
    } else {
      return res.sendStatus(404).json({ message: "Record not found" });
    }
  } catch (error) {
    if (!res.headersSent) {
      return res
        .sendStatus(400)
        .send({ message: "Something went wrong", error: error });
    }
  }
});

process.on("uncaughtException", (err) => {
  console.error(err && err.stack);
});

module.exports = app;
