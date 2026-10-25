const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

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

const add = async (data) => {
  const versions = await getAll();
  const newVersion = {
    id: nanoid(),
    ...data,
  };
  versions.push(newVersion);
  await fs.writeFile(versionsPath, JSON.stringify(versions, null, 2));
  return newVersion;
};

const updateById = async (id, data) => {
  const versions = await getAll();
  const index = versions.findIndex((item) => item.id === id);
  if (index === -1) return null;
  versions[index] = { id, ...data };
  await fs.writeFile(versionsPath, JSON.stringify(versions, null, 2));
  return versions[index];
};

const deleteById = async (id) => {
  const versions = await getAll();
  const index = versions.findIndex((item) => item.id === id);
  if (index === -1) return null;
  const [result] = versions.splice(index, 1);
  await fs.writeFile(versionsPath, JSON.stringify(versions, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
};
