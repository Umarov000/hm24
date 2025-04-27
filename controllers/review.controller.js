const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getAllReviews = (req, res) => {
  db.query(`select * from review`, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(result);
    }
  });
};


const getReviewById = (req, res) => {
  const { id } = req.params;
  db.query(`select * from review where id=?`, id, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(result);
    }
  });
};
const removeReview = (req, res) => {
  const id = req.params.id;

  db.query(`delete from review where id=?`, id, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(`Review deleted successfully. `);
    }
  });
};
const updateReview = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const newData = queryGenerate(data);
  const values = Object.values(data);

  db.query(
    `update review set ${newData} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.send(`Review updated successfully. `);
      }
    }
  );
};

const createReview = (req, res) => {
  const { stadion_id, user_id, rating, comment } = req.body;
  db.query(
    `insert into review (stadion_id, user_id, rating, comment ) VALUES (?,?,?,?)`,
    [stadion_id, user_id, rating, comment],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.send(`review added successfully. `);
      }
    }
  );
};

module.exports = {
  getAllReviews,
  getReviewById,
  removeReview,
  updateReview,
  createReview,
};
