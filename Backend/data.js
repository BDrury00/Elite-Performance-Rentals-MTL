const cars = [
  {
    _id: "R8",
    id: 1,
    make: "Audi",
    model: "R8",
    dailyRate: 450,
    pictures: [],
    isAvailable: true,
  },
  {
    _id: "Countach",
    id: 2,
    make: "Lamborghini",
    model: "Countach LPI 800-4",
    dailyRate: 875,
    pictures: [],
    isAvailable: true,
  },
  {
    _id: "Urus",
    id: 3,
    make: "Lamborghini",
    model: "Urus",
    dailyRate: 350,
    pictures: [],
    isAvailable: true,
  },
  {
    _id: "765LT-Spider",
    id: 4,
    make: "McLaren",
    model: "765LT Spider",
    dailyRate: 750,
    pictures: [],
    isAvailable: true,
  },
  {
    _id: "SF90-Spider",
    id: 5,
    make: "Novitec Ferrari",
    model: "SF90 Spider",
    dailyRate: 900,
    pictures: [],
    isAvailable: true,
  },
  {
    _id: "Cayman-GTS",
    id: 6,
    make: "Porsche",
    model: "Cayman GTS",
    dailyRate: 350,
    pictures: [],
    isAvailable: false, // assuming that the car is in the repair shop as it is a rental service some cars may need to be unavailable during these repairs
  },
];

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

const users = [
  {
    _id: 1,
    userNumber: 1,
    name: "Luca Guy",
    email: "luca@gmail.com",
    password: "secretPassWord123",
    reservation: "849ca5da-f812-4e30-93eb-7c56555b22ef",
  },
];

//exports

module.exports = { cars, reservations, users };
