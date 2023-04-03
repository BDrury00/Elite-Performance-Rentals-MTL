import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SpecificCar = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();

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
        <CarImg src={car.cutoutImage} alt={car.full} />
      </Left>
      <Right>
        <h2>{car.full}</h2>
        <p>{car.description}</p>
        <p>Daily Rate: {car.dailyRate}</p>
        <Link to={`/cars/${car._id}/reservation`}>
          <button>Book Now</button>
        </Link>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

//

const CarImg = styled.img`
  max-width: 600px;
`;

//

const Left = styled.div``;

//

const Right = styled.div``;

export default SpecificCar;
