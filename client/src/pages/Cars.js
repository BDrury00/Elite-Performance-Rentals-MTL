import { useState, useEffect } from "react";
import CarBoxes from "../components/CarBoxes";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars")
      .then((response) => response.json())
      .then((cardata) => setCars(cardata.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {" "}
      {cars.map((car) => (
        <CarBoxes key={car._id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
