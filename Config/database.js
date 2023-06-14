/** @format */

const mongoose = require("mongoose");

const Set07DB = "mongodb://0.0.0.0:27017/Set07Database";
const Set07DB1 = "mongodb://localhost/Set07Database";
const bossDB2 = "mongodb://0.0.0.0:27017/schoolappDataBase";

const Database = async () => {
  try {
    const dbconnect = await mongoose.connect(bossDB2);
    console.log(`Databaase is connected to ${dbconnect.connection.host}`);
  } catch (error) {
    console.log("An Error occured");
  }
};

module.exports = Database();
