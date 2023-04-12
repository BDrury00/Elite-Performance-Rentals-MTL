import styled from "styled-components";
import { useState } from "react";

const ReservationBoxes = ({ reservation, setReservations, reservations }) => {
  // handler for deleting the reservation

  const [deleting, setDeleting] = useState(false);

  const handleDelete = () => {
    setDeleting(true);
    fetch(`/reservations/${reservation._id}`, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        setDeleting(false);
        // remove deleted reservation from reservations array
        const updatedReservations = reservations.filter(
          (r) => r._id !== reservation._id
        );
        // update reservations state
        setReservations(updatedReservations);
      })
      .catch((error) => {
        console.error(`Error deleting reservation: ${error.message}`);
        setDeleting(false);
      });
  };

  return (
    <Wrapper>
      <ReservationBox>
        <p>Reservation Id: {reservation._id}</p>
        <p>Car: {reservation.carId}</p>
        <p>Start Date: {reservation.startDate}</p>
        <p>End Date: {reservation.endDate}</p>
        <DeleteButton onClick={handleDelete} disabled={deleting}>
          {deleting ? "Deleting..." : "Delete"}
        </DeleteButton>
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

const DeleteButton = styled.button``;

export default ReservationBoxes;
