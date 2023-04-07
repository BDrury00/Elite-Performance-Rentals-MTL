"use strict";

// Stuff for auth0 authentication
const jwt = require("jsonwebtoken");

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

// create a reservation
const createReservation = async (req, res) => {
  try {
    const _id = uuidv4();
    const carId = req.params.carId;
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode token
    const { email } = decoded;
    const { startDate, endDate } = req.body;

    const reservation = {
      _id,
      email,
      carId,
      startDate,
      endDate,
    };

    await client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const reservationsCollection = await db.collection("reservations");
    await reservationsCollection.insertOne(reservation);

    res.status(201).json({
      status: 201,
      message: "Reservation created successfully",
      data: reservation,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: 400, message: err });
  }
};

// delete reservation
const deleteReservation = async (req, res) => {};

// get the users
const getUsers = async (req, res) => {};

// update reservation
const updateReservation = async (req, res) => {};

module.exports = {
  getCars,
  getCar,
  getCarAvailability,
  getUsers,
  createReservation,
  updateReservation,
  deleteReservation,
};
