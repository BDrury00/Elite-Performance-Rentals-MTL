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

    const availability = carsReservations.map((reservation) => {
      return { startDate: reservation.startDate, endDate: reservation.endDate };
    });

    res.status(200).json({ status: 200, carId: carId, data: availability });
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
    const { email } = req.body;
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);
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

    const carsCollection = await db.collection("cars");
    await carsCollection.updateOne(
      { _id: carId },
      { $push: { reservations: _id } }
    );

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

//get the reservation by its _id
//get endpoint /reserv/confirm/:_id
const getReservationById = async (req, res) => {
  const _id = req.params._id;
  try {
    await client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const reservationsCollection = await db.collection("reservations");

    const reservationInfo = await reservationsCollection.findOne({
      _id: _id,
    });
    client.close();
    res.status(200).json({ status: 200, data: reservationInfo });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Error fetching reservation by its id." });
  }
};

// delete reservation
const deleteReservation = async (req, res) => {
  const reservationId = req.params.reservationId;
  try {
    await client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const reservationsCollection = await db.collection("reservations");
    const result = await reservationsCollection.deleteOne({
      _id: reservationId,
    });
    client.close();
    if (result.deletedCount === 1) {
      res
        .status(200)
        .json({ status: 200, message: "Reservation deleted successfully." });
    } else {
      res.status(404).json({ status: 404, message: "Reservation not found." });
    }
  } catch (err) {
    res
      .status(400)
      .json({ status: 400, message: "Error deleting reservation." });
  }
};

// get the users reservations by there email.
// endpoint: /userdata/:userId where userId is the users email address.
const getUserData = async (req, res) => {
  const email = req.params.userId;
  try {
    await client.connect();
    const db = client.db("Elite-Performance-Rentals");
    const reservationsCollection = await db.collection("reservations");

    const usersReservations = await reservationsCollection
      .find({
        email: email,
      })
      .toArray();
    client.close();
    res.status(200).json({ status: 200, data: usersReservations });
  } catch (err) {
    res
      .status(400)
      .json({ status: 400, message: "Error retrieving users data." });
  }
};

// update reservation
const updateReservation = async (req, res) => {};

module.exports = {
  getCars,
  getCar,
  getCarAvailability,
  getUserData,
  createReservation,
  updateReservation,
  deleteReservation,
  getReservationById,
};
