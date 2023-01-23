const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();

// Models
const Travel = require("./models/Travel.model");

mongoose.connect(process.env.MONGO_URI);

const travels = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/travel.json`, "utf-8")
);

// Import
const importData = async () => {
  try {
    await Travel.create(travels);

    console.log("Data imported to DB...");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Travel.deleteMany();

    console.log("Data deleted...");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
