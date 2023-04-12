import floorRoom from "../contactUs/floorRoom.jpg";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <FloorRoom src={floorRoom} alt="Floor Room" />
      <p>Contact Us! (450)-NUN-YABIZ</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 26px;
`;

const FloorRoom = styled.img`
  max-width: 1000px;
  border-radius: 20px;
`;

export default Contact;
