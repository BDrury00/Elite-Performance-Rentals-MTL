import styled from "styled-components";
import { Link } from "react-router-dom";

const CarBoxes = ({ car }) => {
  return (
    <CarBoxWrapper>
      <CarImgContainer>
        <CarImg src={car.cutoutImage} alt={car.make} />
      </CarImgContainer>
      <InfoUnderJpg>
        <h2>{car.full}</h2>
        <p>Daily rate: ${car.dailyRate}</p>
      </InfoUnderJpg>
      <InfoButtonContainer>
        <Link to={`/cars/${car._id}`}>
          <InfoButton>More Info!</InfoButton>
        </Link>
      </InfoButtonContainer>
    </CarBoxWrapper>
  );
};

const CarBoxWrapper = styled.div`
  background-color: lightgrey;
  border: 3px solid black;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: relative;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

const CarImg = styled.img`
  max-width: 100%;
  max-height: 250px;
  width: auto;
  height: auto;
  object-fit: contain;
  margin-bottom: 50px;
`;

const CarImgContainer = styled.div``;

const InfoUnderJpg = styled.div`
  margin-bottom: 50px;
  flex: 1;
`;

const InfoButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InfoButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #0069d9;
  }
`;

export default CarBoxes;
