import { useState, useEffect } from "react";
import CarBoxes from "../components/CarBoxes";
import styled from "styled-components";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/cars")
      .then((response) => response.json())
      .then((cardata) => {
        setCars(cardata.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

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

const Loading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
`;

export default Cars;
