import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Account = () => {
  const { user } = useAuth0();

  const { name, email } = user;

  return (
    <Wrapper>
      <h1>Basic Account Information:</h1>
      <Name>{name}</Name>
      <Email>{email}</Email>
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

const Email = styled.p`
  font-size: 28px;
`;

export default Account;
