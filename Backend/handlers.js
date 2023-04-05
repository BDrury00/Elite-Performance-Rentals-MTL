"use strict";

// Mongo imports and setup
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const client = new MongoClient(MONGO_URI, options);

// Unique id's for reservations
// to use it: const reservationId = uuidv4();
const { v4: uuidv4 } = require("uuid");

// handler functions

// get all the cars
// get endpoint: "/cars"
const getCars = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const collection = await db.collection("cars");
    const allCars = await collection.find({}).toArray();
    client.close();
    res.status(200).json({ status: 200, data: allCars });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: 400,
      message: "Error retrieving all cars from databse.",
    });
  }
};

// get specific car by its id
// get endpoint: "/cars/:carId"
const getCar = async (req, res) => {
  try {
    const carId = req.params.carId;
    await client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const collection = await db.collection("cars");
    const car = await collection.findOne({ _id: carId });
    client.close();
    if (car) {
      res.status(200).json({ status: 200, data: car });
    } else {
      res.status(404).json({
        status: 404,
        message: `Car with ID ${carId} not found`,
      });
    }
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: 400,
      message: "Error retrieving car from database.",
    });
  }
};

// find out how long specified car is reserved for to lockout option of reserving that car during reservation days
// get endpoint: "/cars/:carId/availability"
const getCarAvailability = async (req, res) => {
  try {
    const carId = req.params.carId;
    await client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const reservationsCollection = await db.collection("reservations");

    const carsReservations = await reservationsCollection
      .find({
        carId: carId,
      })
      .toArray();
    client.close();

    // No need to handle if an array of reservations is empty as this just means the car is available at any date
    res.status(200).json({ status: 200, carId: carId, data: carsReservations });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "Error retrieving reservation data for this car",
    });
  }
};

// get the users
const getUsers = async (req, res) => {};

// create a reservation
const createReservation = async (req, res) => {};

// update reservation
const updateReservation = async (req, res) => {};

// delete reservation
const deleteReservation = async (req, res) => {};

module.exports = {
  getCars,
  getCar,
  getCarAvailability,
  getUsers,
  createReservation,
  updateReservation,
  deleteReservation,
};
