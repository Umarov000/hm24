const { Router } = require("express");
const {
  getStadionAll,
  getOneStadionById,
  createStadion,
  updateStadionById,
  removeStadionByid,
} = require("../controllers/stadion.controller");

let stadionRouter = Router();

stadionRouter.get("/all", getStadionAll);
stadionRouter.get("/:id", getOneStadionById);
stadionRouter.post("/create", createStadion);
stadionRouter.patch("/:id", updateStadionById);
stadionRouter.delete("/:id", removeStadionByid);

module.exports = stadionRouter
