const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

const getAllBooking = (req, res) => {
  db.query(`select * from booking`, (err, result) => {
    if (err) {
      res.status(500).send({ message: `${err}` });
    } else {
      res.status(200).send(result);
    }
  });
};

const createBooking = (req, res) => {
    const {
      stadion_id,
      user_id,
      booking_date,
      start_time,
      end_time,
      total_price,
      status,
    } = req.body;
  db.query(
    `insert into booking (stadion_id, user_id,booking_date,start_time, end_time,total_price,status)VALUES
    (?,?,?,?,?,?,?)`,
    [
      stadion_id,
      user_id,
      booking_date,
      start_time,
      end_time,
      total_price,
      status,
    ],
    (err, result) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.status(200).send(`Booking successfully added`);
      }
    }
  );
};


const getBookingById = (req, res) => {
    const {id} = req.params

    db.query(`select * from booking where id=?`, id, (err,result)=>{
        if(err){
            res.status(500).send({message:`${err}`})
        }else{
            res.send(result)
        }
    })
};
const updateBookingById = (req, res) => {
    const {id} = req.params
    const data = req.body
    let updatedValue = queryGenerate(data)
    let values = Object.values(data)

    db.query(`update booking set ${updatedValue} where id=?`, [...values, id], (err, result)=>{
        if(err){
            res.status(500).send({message: `${err}`})
        }else{
            res.send(`Booking updated successfully. `)
        }
    })
};
const removeBookingById = (req, res) => {
    const {id} = req.params
    db.query(`delete from booking where id=?`, id, (err, result)=>{
        if(err){
            res.status(500).send({message:`${err}`})
        }else{
            res.send(`Booking deleted successfully. `)
        }
    })
};

module.exports = {
  getAllBooking,
  getBookingById,
  updateBookingById,
  removeBookingById,
  createBooking,
};
