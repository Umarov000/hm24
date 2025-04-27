const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getAllImages = (req, res) => {
  db.query(`select * from images`, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(result);
    }
  });
};
const getImagesById = (req, res) => {
  const { id } = req.params;
  db.query(`select * from images where id=?`, id, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(result);
    }
  });
};
const removeImages = (req, res) => {
  const id = req.params.id;

  db.query(`delete from images where id=?`, id, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(`Image deleted successfully. `);
    }
  });
};
const updateImages = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const newData = queryGenerate(data);
  const values = Object.values(data);

  db.query(
    `update images set ${newData} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.send(`Image updated successfully. `);
      }
    }
  );
};

const createImage = (req, res) => {
  const { stadion_id, image_url } = req.body;
  db.query(
    `insert into images (stadion_id, image_url) VALUES (?,?)`,
    [stadion_id, image_url],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.send(`Image added successfully. `);
      }
    }
  );
};

module.exports = {
  getAllImages,
  getImagesById,
  removeImages,
  updateImages,
  createImage,
};
