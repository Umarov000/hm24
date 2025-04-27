const db = require("../config/db");

const getStadionAll = (req, res) => {
  db.query("SELECT * FROM stadium", (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send({ data: result });
  });
};

const getOneStadionById = (req, res) => {
  let { id } = req.params;
  db.query(`SELECT * FROM stadium WHERE id = ?`, [id], (err, result) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    res.status(200).send({ data: result });
  });
};

const createStadion = (req, res) => {};

const updateStadionById = (req, res) => {};

const removeStadionByid = (req, res) => {};

module.exports = {
  getStadionAll,
  getOneStadionById,
  createStadion,
  updateStadionById,
  removeStadionByid,
};
