const { getAllPayments, createPayment, getPaymentById, updatePayment, removePayment } = require("../controllers/payments.controller")

const router = require("express").Router()


router.get("/all", getAllPayments)
router.post("/create", createPayment);
router.get("/:id", getPaymentById)
router.patch("/:id", updatePayment)
router.delete("/:id", removePayment)

module.exports = router
