import { useState, useEffect } from "react";
import CarBoxes from "../components/CarBoxes";
import styled from "styled-components";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars")
      .then((response) => response.json())
      .then((cardata) => setCars(cardata.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      {" "}
      {cars.map((car) => (
        <CarBoxes key={car._id} car={car} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

export default Cars;
