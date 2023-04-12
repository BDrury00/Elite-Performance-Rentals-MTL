import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import { useAuth0 } from "@auth0/auth0-react";

//

//

//

const SpecificCar = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const { id } = useParams();
  const [carLoading, setCarLoading] = useState(true);
  const [reservationLoading, setReservationLoading] = useState(false);

  // for calendar reserved days
  // const [bookedDays, setBookedDays] = useState([]);
  // const [calendarLoading, setCalendarLoading] = useState(false);
  // const [calendarClicked, setCalendarClicked] = useState(false);

  // For Calendar
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //

  //
  // get auth0 users credentials:
  const { user, isAuthenticated } = useAuth0();

  //
  // handler for reservations:
  const handleReservation = async () => {
    setReservationLoading(true);
    try {
      const response = await fetch(`/cars/${car._id}/reserv`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          startDate: range[0].startDate,
          endDate: range[0].endDate,
        }),
      });

      const data = await response.json();
      setReservationLoading(false);
      const reservationId = data.data._id;
      navigate(`/confirm/${reservationId}`);
    } catch (error) {
      setReservationLoading(false);
      console.error(error);
    }
  };

  // Fetch to get car info for that specific car
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/cars/${id}`);
        const data = await res.json();
        setCar(data.data);
        setCarLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (carLoading) {
    return (
      <MiddleScreenLoading>Loading car information...</MiddleScreenLoading>
    );
  }
  if (!car) {
    return (
      <MiddleScreenLoading>Error fetching car information!</MiddleScreenLoading>
    );
  }

  return (
    <Wrapper>
      <Left>
        <CarImgs>
          {car.allImages.map((image, index) => (
            <CarImg
              key={index}
              src={image}
              alt={`${car.full} image ${index + 1}`}
            />
          ))}
        </CarImgs>
      </Left>
      <Right>
        <h2>{car.full}</h2>
        <p>{car.description}</p>
        <p>Daily Rate: ${car.dailyRate}</p>
        {reservationLoading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <Calendar range={range} setRange={setRange} id={id} />
            {isAuthenticated ? (
              <BookButton onClick={handleReservation}>Book Now</BookButton>
            ) : (
              <p>Must be signed in to make a reservation</p>
            )}
          </>
        )}
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;

//

const CarImgs = styled.div`
  max-width: 600px;
`;

const CarImg = styled.img`
  max-width: 600px;
`;

//

const Left = styled.div`
  flex: 1;
`;

//

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 200px;
`;

const BookButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #0062cc;
  }
`;

const MiddleScreenLoading = styled.h1``;

export default SpecificCar;
