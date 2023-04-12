import rarri from "../backgroundCutouts/rarri.png";
import porschy from "../backgroundCutouts/porschy.png";

import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <WebsiteName>Elite Performance Rentals</WebsiteName>
      <TopLeft>
        <img src={rarri} alt="Rarri" />
      </TopLeft>
      <TextWrap>
        <p>
          Welcome to Elite Performance Rentals, Montreal's premier exotic car
          rental company. We offer a wide selection of high-performance vehicles
          to choose from, including Lamborghinis, Ferraris, Porsches, and more.
          Our mission is to provide our clients with the ultimate driving
          experience, whether it's for a special occasion or just for the thrill
          of it. At Elite Performance Rentals, we pride ourselves on our
          exceptional customer service and attention to detail. From the moment
          you book your rental to the moment you return the keys, we are
          dedicated to ensuring that your experience is nothing short of
          extraordinary.
        </p>
        <p>
          Whether you're looking to impress at a special event, explore the city
          in style, or simply indulge in your passion for high-performance cars,
          Elite Performance Rentals has you covered. Visit the "Our Fleet" link
          in the navigation bar to familiarize yourself with our exotic rentals!
        </p>
      </TextWrap>
      <TopRight>
        <img src={porschy} alt="Porsche" />
      </TopRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  margin: auto;

  text-align: center;

  img {
    max-width: 1000px;
  }
`;

const WebsiteName = styled.h1`
  font-size: 5rem;
  color: transparent;
  text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(45deg, #ff8a00, #e52e71);
  margin-bottom: 40px;
`;

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: -8%;
`;

const TopRight = styled.div`
  position: absolute;
  bottom: -200px;
  right: 0;
`;

const TextWrap = styled.div`
  color: black;
  font-size: 19.5px;
`;

export default Home;
