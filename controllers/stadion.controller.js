const db = require("../config/db");
const queryGenerate = require("../utils/query.generate");

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


const createStadion = (req, res) => {
  const { name, address, location, description, price, owner_id } = req.body;
  db.query(
    `
            INSERT INTO stadium (name, address,location,description,price,owner_id) 
            VALUES (?,?,?,?,?,?) 
            `,
    [name, address, location, description, price, owner_id],
    (error, result) => {
      if (error) {
        console.log(`Error adding new stadion`, error);
        return res.status(500).send({ message: "Serverda xatolik!" });
      }
      console.log(result);
      res
        .status(201)
        .send({ message: "Yangi stadion qo'shildi", userId: result.insertId });
    }
  );
};

const updateStadionById = (req, res) => {
  
    let { id } = req.params;
    let data = req.body;
    updateValue = queryGenerate(data);
    let values = Object.values(data);

    db.query(
      `UPDATE stadium SET ${updateValue} WHERE id=?`,
      [...values, id],
      (err, result) => {
        if (err) {
          res.status(500).send({ message: `${err.message}` });
        }
        res.status(200).send({ message: "Stadium updated successfully" });
      }
    );
};

const removeStadionByid = (req, res) => {
  let {id} = req.params

  db.query(`delete from stadium where id=?`, id, (error,result)=>{
    if(error){
      res.status(500).send({message: `${error}`});

    }else{
      res.status(200).send({message:`Stadion deleted successfully`})
    }
  })
};

module.exports = {
  getStadionAll,
  getOneStadionById,
  createStadion,
  updateStadionById,
  removeStadionByid,
};
