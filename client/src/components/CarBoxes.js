import styled from "styled-components";
import { Link } from "react-router-dom";

const CarBoxes = ({ car }) => {
  return (
    <CarBoxWrapper>
      <CarImg src={car.cutoutImage} alt={car.make} />
      <h2>{car.full}</h2>
      <p>Daily rate: ${car.dailyRate}</p>
      <Link to={`/cars/${car._id}`}>
        <InfoButton>More Info!</InfoButton>
      </Link>
    </CarBoxWrapper>
  );
};

const CarBoxWrapper = styled.div`
  background-color: lightgrey;
  border: 3px solid black;
  max-width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const CarImg = styled.img`
  max-width: 400px;
`;

const InfoButton = styled.button``;

export default CarBoxes;
