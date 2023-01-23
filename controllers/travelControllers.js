const Travel = require("../models/Travel.model");
// router       "/"
// Method:      GET
// Descr:       Get all travels books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();

    res.status(200).json({
      message: "success",
      travels: travels.reverse(),
    });
  } catch (err) {
    console.log(err);
  }
};

// router       "/:id"
// Method:      GET
// Descr:       Get one travel
const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);

    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      message: "success",
      travel,
    });
  } catch (err) {
    res.send(err);
  }
};

// router       "/add"
// Method:      POST
// Descr:       add travel
const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;

    const newTravel = await Travel.create({
      title,
      image,
      descr,
    });
    res.status(201).json({
      message: "success",
      newTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

// router       "/update"
// Method:      PUT
// Descr:       edit travel book by its ID
const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const updateTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });

    res.status(200).json({
      message: "success",
      updateTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

// router       "/delete"
// Method:      DELETE
// Descr:       Delete travel book by ID
const deleteTraveBook = async (req, res) => {
  try {
    await Travel.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Deleted",
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  deleteTraveBook,
};
