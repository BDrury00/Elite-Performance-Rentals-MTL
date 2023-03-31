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
const getCar = async (req, res) => {};

// find out how long specified car is reserved for to lockout option of reserving that car during reservation days
const getCarAvailability = async (req, res) => {};

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
