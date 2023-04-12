const { MongoClient } = require("mongodb");
const { cars } = require("./data.js");
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

const reservationsCollection = async () => {
  try {
    // client.connect();
    const db = client.db("Elite-Performance-Rentals");
    await db.createCollection("reservations");

    console.log("Successfully created reservations collection!");
  } catch (err) {
    console.log("Error creating reservations collection:", err.message);
  }
};

// function to call all other functions

const importData = async () => {
  try {
    await client.connect();
    await carsData();
    await reservationsCollection();
    await client.close();
  } catch (err) {
    console.log("Error importing data:", err);
  }
};

// call it at the bottom of the file to run the function when the file is run using node batchImport.js
importData();
