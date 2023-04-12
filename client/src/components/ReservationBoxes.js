import styled from "styled-components";
import { useState } from "react";
import Calendar4Update from "./Calendar4Update";
import format from "date-fns/format";

const ReservationBoxes = ({
  reservation,
  setReservations,
  reservations,
  carId,
}) => {
  const [editing, setEditing] = useState(false);
  // For Calendar
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [reservationUpdateLoading, setReservationUpdateLoading] =
    useState(false);

  const [deleting, setDeleting] = useState(false);

  // handler for deleting the reservation
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

  // handler for updating the reservation
  const handleUpdate = async () => {
    setReservationUpdateLoading(true);
    try {
      const response = await fetch(`/reservations/${reservation._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: range[0].startDate,
          endDate: range[0].endDate,
        }),
      });
      const data = await response.json();
      setReservationUpdateLoading(false);
      const updatedReservation = data.data;
      const updatedReservations = reservations.map((r) =>
        r._id === updatedReservation._id ? updatedReservation : r
      );
      setReservations(updatedReservations);
      setEditing(false);
    } catch (error) {
      setReservationUpdateLoading(false);
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <ReservationBox key={reservation._id}>
        <p>Reservation Id: {reservation._id}</p>
        <p>Car: {reservation.carId}</p>
        <p>
          Start Date:{" "}
          {format(new Date(reservation.startDate), "EEEE, MMMM d, yyyy")}
        </p>
        <p>
          End Date:{" "}
          {format(new Date(reservation.endDate), "EEEE, MMMM d, yyyy")}
        </p>
        <DeleteButton onClick={handleDelete} disabled={deleting}>
          {deleting ? "Deleting..." : "Delete"}
        </DeleteButton>
        {editing ? (
          <UpdateWrapper>
            <Calendar4Update range={range} setRange={setRange} carId={carId} />
            <UpdateButton
              onClick={handleUpdate}
              disabled={reservationUpdateLoading}
            >
              {reservationUpdateLoading ? "Updating..." : "Update"}
            </UpdateButton>
            <DoneEditButton onClick={() => setEditing(false)}>
              Done
            </DoneEditButton>
          </UpdateWrapper>
        ) : (
          <DoneEditButton onClick={() => setEditing(true)}>Edit</DoneEditButton>
        )}
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

const UpdateWrapper = styled.div``;

const DoneEditButton = styled.button`
  background-color: #0ec208;
  color: white;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  border: none;

  &:hover {
    background-color: green;
  }
`;

const UpdateButton = styled.button`
  background-color: blue;
  color: white;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  border: none;

  &:hover {
    background-color: #0871c2;
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  border: none;

  &:hover {
    background-color: darkred;
  }
`;

export default ReservationBoxes;
