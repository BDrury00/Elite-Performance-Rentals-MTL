const { MongoClient } = require("mongodb");
const { cars, reservations, users } = require("./data.js");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const client = new MongoClient(MONGO_URI, options);

const carsData = async () => {
  try {
    // client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const carCollection = await db.collection("cars").insertMany(cars);
    console.log("Successfully imported car data to car collection!");
    // client.close();
  } catch (err) {
    console.log("Error importing car data:", err.message);
  }
};

const reservationsData = async () => {
  try {
    // client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const reservationCollection = await db
      .collection("reservations")
      .insertMany(reservations);
    console.log(
      "Successfully imported reservation data to reservation collection!"
    );
    // client.close();
  } catch (err) {
    console.log("Error importing reservation data:", err.message);
  }
};

const userData = async () => {
  try {
    // client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const userCollection = await db.collection("users").insertMany(users);
    console.log("Succesfully imported user data to user data collection!");
  } catch (err) {
    console.log("Error importing user data:", err.message);
  }
};

// function to call all other functions

const importData = async () => {
  try {
    await client.connect();
    await carsData();
    await reservationsData();
    await userData();
    await client.close();
  } catch (err) {
    console.log("Error importing data:", err);
  }
};

// call it at the bottom of the file to run the function when the file is run using node batchImport.js
importData();
