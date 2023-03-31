const fs = require("fs");
const path = require("path");

// to get an array of all the file names in a specific directory:
const audiImgs = fs.readdirSync(
  path.join(__dirname, "./Images/cars4rent/audi-r8/Images")
);

const lamboCountachImgs = fs.readdirSync(
  path.join(__dirname, "./Images/cars4rent/lamborghini-countach/Images")
);

const lamboUrusImgs = fs.readdirSync(
  path.join(__dirname, "./Images/cars4rent/lamborghini-urus/Images")
);

const mcLarenImgs = fs.readdirSync(
  path.join(__dirname, "./Images/cars4rent/mclaren-765LT-spider/Images")
);

const noviFerrariImgs = fs.readdirSync(
  path.join(__dirname, "./Images/cars4rent/novitec-ferrari-SF90-spider/Images")
);

const porscheImgs = fs.readdirSync(
  path.join(__dirname, "./Images/cars4rent/porsche-cayman-GTS/Images")
);
//

//

// data for cars
const cars = [
  {
    _id: "R8",
    id: 1,
    make: "Audi",
    model: "R8",
    dailyRate: 450,
    cutoutImage: "",
    allImages: audiImgs,
  },
  {
    _id: "Countach",
    id: 2,
    make: "Lamborghini",
    model: "Countach LPI 800-4",
    dailyRate: 875,
    cutoutImage: "",
    allImages: lamboCountachImgs,
  },
  {
    _id: "Urus",
    id: 3,
    make: "Lamborghini",
    model: "Urus",
    dailyRate: 350,
    cutoutImage: "",
    allImages: lamboUrusImgs,
  },
  {
    _id: "765LT-Spider",
    id: 4,
    make: "McLaren",
    model: "765LT Spider",
    dailyRate: 750,
    cutoutImage: "",
    allImages: mcLarenImgs,
  },
  {
    _id: "SF90-Spider",
    id: 5,
    make: "Novitec Ferrari",
    model: "SF90 Spider",
    dailyRate: 900,
    cutoutImage: "",
    allImages: noviFerrariImgs,
  },
  {
    _id: "Cayman-GTS",
    id: 6,
    make: "Porsche",
    model: "Cayman GTS",
    dailyRate: 350,
    cutoutImage: "",
    allImages: porscheImgs,
  },
];

// reservation data
const reservations = [
  {
    _id: "849ca5da-f812-4e30-93eb-7c56555b22ef",
    userId: "luca@gmail.com",
    carId: 6,
    startDate: {
      day: 1,
      month: 4,
      year: 2023,
    },
    endDate: {
      day: 6,
      month: 4,
      year: 2023,
    },
  },
];

// user data
const users = [
  {
    _id: "luca@gmail.com",
    firstName: "Luca",
    lastName: "Guy",
    email: "luca@gmail.com",
    password: "secretPassWord123",
    reservations: ["849ca5da-f812-4e30-93eb-7c56555b22ef"],
  },
];

//exports

module.exports = { cars, reservations, users };
