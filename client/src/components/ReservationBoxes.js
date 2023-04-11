import styled from "styled-components";

const ReservationBoxes = ({ reservation }) => {
  return (
    <Wrapper>
      <ReservationBox>
        <p>Reservation Id: {reservation._id}</p>
        <p>Car: {reservation.carId}</p>
        <p>Start Date: {reservation.startDate}</p>
        <p>End Date: {reservation.endDate}</p>
      </ReservationBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

const ReservationBox = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  min-width: 800px;
  background-color: lightgrey;
`;

export default ReservationBoxes;
