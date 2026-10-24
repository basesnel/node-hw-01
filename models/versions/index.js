const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");

const versionsPath = path.join(__dirname, "versions.json");

const getAll = async () => {
  const data = await fs.readFile(versionsPath);
  return JSON.parse(data);
};

const getById = async (id) => {
  const versions = await getAll();
  const result = versions.find((item) => item.id === id);
  return result || null;
};

module.exports = {
  getAll,
  getById,
};
