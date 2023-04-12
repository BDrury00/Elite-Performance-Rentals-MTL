import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ReservationBoxes from "../components/ReservationBoxes";

const Account = () => {
  const { user } = useAuth0();

  const { name, email } = user;
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch for the reservations
  useEffect(() => {
    fetch(`/userdata/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setReservations(data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.error(`Error fetching user data: ${error.message}`);
      });
  }, [email]);

  return (
    <Wrapper>
      <h1>Account:</h1>
      <Name>{name}</Name>
      <h2>Reservation(s):</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {reservations.length > 0 ? (
            reservations.map((reservation) => (
              <ReservationBoxes
                key={reservation._id}
                reservation={reservation}
                setReservations={setReservations}
                reservations={reservations}
              />
            ))
          ) : (
            <p>You currently have no reservations</p>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.p`
  margin-top: 0;
  font-size: 28px;
`;

export default Account;
