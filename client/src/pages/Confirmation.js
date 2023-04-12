import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import format from "date-fns/format";

const Confirmation = () => {
  const [confirmInfo, setConfirmInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { reservationId } = useParams();

  useEffect(() => {
    fetch(`/reserv/confirm/${reservationId}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setConfirmInfo(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [reservationId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!confirmInfo) {
    return <div>There was an error loading the confirmation data</div>;
  }

  return (
    <Wrapper>
      <Info>
        <h2>Confirmation:</h2>
        <p>Confirmation id: {confirmInfo._id}</p>
        <p>Email: {confirmInfo.email}</p>
        <p>Car: {confirmInfo.carId}</p>
        <p>
          From:{" "}
          <Bold>
            {format(new Date(confirmInfo.startDate), "EEEE, MMMM d, yyyy")}
          </Bold>{" "}
          to{" "}
          <Bold>
            {format(new Date(confirmInfo.endDate), "EEEE, MMMM d, yyyy")}
          </Bold>
        </p>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  & > * {
    color: grey;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  min-height: 45%;

  border: 2px solid black;
  max-width: 100%;
  min-width: 30%;
  & > * {
    margin-bottom: 20px;
    padding: 5%;
  }
`;

export default Confirmation;
