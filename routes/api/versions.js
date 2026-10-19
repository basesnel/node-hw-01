const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.get("/:versionId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:versionId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:versionId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
