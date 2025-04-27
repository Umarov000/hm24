const {
  getAllReviews,
  getReviewById,
  removeReview,
  updateReview,
  createReview,
} = require("../controllers/review.controller");

const router = require("express").Router();

router.get("/all", getAllReviews);
router.post("/create", createReview);
router.get("/:id", getReviewById);
router.patch("/:id", updateReview);
router.delete("/:id", removeReview);

module.exports = router;
