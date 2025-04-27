const router = require("express").Router()

const {
  getAllBooking,
  getBookingById,
  updateBookingById,
  removeBookingById,
  createBooking,
} = require("../controllers/booking.controller");


router.get("/all", getAllBooking);
router.get("/:id", getBookingById);
router.post("/create", createBooking);
router.patch("/:id", updateBookingById);
router.delete("/:id", removeBookingById);



module.exports = router
