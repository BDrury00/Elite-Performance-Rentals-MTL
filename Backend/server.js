"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8888;

// for auth0

const {
  getCars,
  getCar,
  getCarAvailability,
  getUsers,
  createReservation,
  updateReservation,
  deleteReservation,
} = require("./handlers");

// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));

// Nothing to modify above this line
// ---------------------------------
// add new endpoints here 👇
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Server works!" });
});

app.get("/cars", getCars); // returns all cars
app.get("/cars/:carId", getCar); // view a specific car
app.get("/cars/:carId/availability", getCarAvailability); // view a specific cars reservations to figure out availability
app.post("/cars/:carId/reserv", createReservation); // reserve a specific car

app.get("endpoint for getting users data");
// add new endpoints here ☝️
// ---------------------------------
// Nothing to modify below this line

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// Node spins up our server and sets it to listen on port.
app.listen(port, () => console.log(`Listening on port ${port}`));
