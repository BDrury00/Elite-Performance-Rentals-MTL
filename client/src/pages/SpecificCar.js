import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import { useAuth0 } from "@auth0/auth0-react";
import UserInfo from "../components/login&logout/UserInfo";

//

//

//

const SpecificCar = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();

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

  //

  // Fetch to get car info for that specific car
  useEffect(() => {
    fetch(`/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
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
        <Calendar range={range} setRange={setRange} />
        <Link
          to={`/cars/${car._id}/reserv`}
          onClick={() => {
            fetch(`/cars/${car._id}/reserv`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                startDate: range[0].startDate,
                endDate: range[0].endDate,
              }),
            });
          }}
        >
          <button>Book Now</button>
        </Link>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default SpecificCar;
