const router = require("express").Router();

const {
  getAllImages,
  getImagesById,
  updateImages,
  removeImages,
  createImage,
} = require("../controllers/images.controller");

router.get("/all", getAllImages);
router.get("/:id", getImagesById);
router.post("/create", createImage);
router.patch("/:id", updateImages);
router.delete("/:id", removeImages);

module.exports = router;
