const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  deleteTraveBook,
} = require("../controllers/travelControllers");

// CRUD
router.get("/", getAllTravels);
router.post("/add", addTravelBook);
router.get("/:id", getTravelById);
router.put("/:id", updateTravelBook);
router.delete("/:id", deleteTraveBook);

module.exports = router;
