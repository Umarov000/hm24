const router = require("express").Router();
const usersRoute = require('./users.routes')
const stadionRoute = require("./stadion.routes");
const bookingRoute = require("./booking.routes");
const paymentRoute = require("./payments.routes")
const reviewRoute = require("./review.routes");
const imageRoute = require("./images.routes");



router.use("/users", usersRoute)
router.use("/stadion", stadionRoute);
router.use("/booking", bookingRoute);
router.use("/payment", paymentRoute)
router.use("/review", reviewRoute);
router.use("/image", imageRoute);




module.exports = router;
