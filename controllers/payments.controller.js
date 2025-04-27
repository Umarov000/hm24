const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getAllPayments = (req, res) => {
  db.query(`select * from payment`, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(result);
    }
  });
};
const getPaymentById = (req, res) => {
  const { id } = req.params;
  db.query(`select * from payment where id=?`, id, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(result);
    }
  });
};
const removePayment = (req, res) => {
  const id = req.params.id;

  db.query(`delete from payment where id=?`, id, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.send(`Payment deleted successfully. `);
    }
  });
};
const updatePayment = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const newData = queryGenerate(data);
  const values = Object.values(data);

  db.query(
    `update payment set ${newData} where id=?`,
    [...values, id],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.send(`Payment updated successfully. `);
      }
    }
  );
};

const createPayment = (req, res) => {
  const { booking_id, amount, payment_time, payment_method } = req.body;
  db.query(
    `insert into payment (booking_id, amount, payment_time, payment_method) VALUES (?,?,?,?)`,
    [booking_id, amount, payment_time, payment_method],
    (err, result) => {
        if(err){
        res.status(500).send({ message: `${err}` });

        }else{
        res.send(`Payment added successfully. `);

        }
    }
  );
};

module.exports = {
  getAllPayments,
  getPaymentById,
  removePayment,
  updatePayment,
  createPayment,
};
